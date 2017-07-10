package com.homedepot.sa.cb.service;

import com.homedepot.sa.cb.constants.Constants;
import com.homedepot.sa.cb.model.AppInfo;
import com.homedepot.sa.cb.model.ServiceResponseStatus;
import com.homedepot.sa.cb.model.sso.LoginRequest;
import com.homedepot.sa.cb.model.sso.LoginResponse;
import com.homedepot.sa.cb.model.sso.SessionValidResponse;
import com.homedepot.sa.cb.model.sso.User;
import com.homedepot.sa.cb.model.sso.UserProfileResponse;
import com.homedepot.sa.cb.model.sso.UserSession;
import com.homedepot.sa.cb.util.GeneralUtils;
import com.homedepot.sa.cb.util.XMLUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

/**
 * Created by MXM6930 on 7/10/2017.
 */
@Service
public class SSOService {
  private static final Logger LOG = Logger.getLogger(SSOService.class);

  @Autowired
  private AppInfo appInfo;

  @Autowired
  private RestTemplate restTemplate;

  /**
   * Log the user in with there credentials
   */
  public LoginResponse login(LoginRequest loginRequest) {
    LOG.info("STARTED: SSOService login request");
    LoginResponse loginResponse = new LoginResponse();
    ServiceResponseStatus serviceResponseStatus = new ServiceResponseStatus();

    String thdLoginURL = appInfo.getThdLoginURL();
    HttpHeaders headers = buildHeader();
    MultiValueMap<String, String> requestFromMap = buildRequestForm(loginRequest);
    HttpEntity<MultiValueMap<String, String>> requestEntity = buildRequestEntity(requestFromMap,
        headers);
    try {
      ResponseEntity<String> res = restTemplate
          .postForEntity(thdLoginURL, requestEntity, String.class);
      if (res == null || StringUtils.isEmpty(res.getBody())) {
        serviceResponseStatus.setMessage("login fail");
        serviceResponseStatus.setSuccess(false);
        loginResponse.setServiceResponseStatus(serviceResponseStatus);
        loginResponse.setMsgFromService("response from MYTHDPassport is ether null or empty");
      } else {
        if (res.getBody().contains(loginRequest.getUsername()) && res.getHeaders() != null) {
          serviceResponseStatus.setMessage("login success");
          serviceResponseStatus.setSuccess(true);
          loginResponse.setServiceResponseStatus(serviceResponseStatus);
          loginResponse.setMsgFromService("success");
          loginResponse
              .setThdSSOCookie(GeneralUtils.extractTHDSSOCookieFromHeader(res.getHeaders()));
        } else {
          serviceResponseStatus.setMessage("login fail");
          serviceResponseStatus.setSuccess(false);
          loginResponse.setServiceResponseStatus(serviceResponseStatus);
          loginResponse.setMsgFromService(
              "login was NOT successful. Possible reason: callingProgram was not supplied, Invalid Credentials, "
                  +
                  "Account Locked, Account inactivated, Password Expired, Internal Server Error");
        }
      }
    } catch (RestClientException rce) {
      serviceResponseStatus.setMessage("login fail due to RestClientException");
      serviceResponseStatus.setSuccess(false);
      loginResponse.setServiceResponseStatus(serviceResponseStatus);
      loginResponse.setMsgFromService("login fail due to RestClientException, " + rce.getMessage());
      LOG.error("RESTCLINETEXCEPTION: SSOService login ==> " + rce.toString());
    } catch (Exception e) {
      serviceResponseStatus.setMessage("login fail due to RestClientException");
      serviceResponseStatus.setSuccess(false);
      loginResponse.setServiceResponseStatus(serviceResponseStatus);
      loginResponse.setMsgFromService("login fail due to RestClientException, " + e.getMessage());
      LOG.error("EXCEPTION: SSOService login ==> " + e.toString());
    }
    LOG.info("END: SSOService login request");
    return loginResponse;
  }

  /**
   * Given a thdsso cookie, retrieve the user information
   * @param thdSSOCookie
   * @param callingPrgm
   * @return
   */
  public UserProfileResponse getUserProfile(String thdSSOCookie, String callingPrgm){
    LOG.info("STARTED: SSOService getUserProfile request");
    String getUserProfileURL = appInfo.getThdGetUserProfile()+ "?callingProgram="+callingPrgm.trim()+"&thdsso="+ thdSSOCookie.trim();
    UserProfileResponse userProfileResponse = new UserProfileResponse();
    ServiceResponseStatus serviceResponseStatus = new ServiceResponseStatus();
    try{
      ResponseEntity<String> responseEntity = restTemplate.exchange(getUserProfileURL, HttpMethod.GET,null,String.class);
      if(responseEntity != null && !StringUtils.isEmpty(responseEntity.getBody())){
        switch (responseEntity.getBody()){
          case Constants.CALLING_PRGM_NOT_SUPPLIED:
            serviceResponseStatus.setSuccess(false);
            serviceResponseStatus.setMessage(Constants.CALLING_PRGM_NOT_SUPPLIED);
            userProfileResponse.setUser(null);
            userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
            break;
          case Constants.INTERNAL_SERVER_ERROR:
            serviceResponseStatus.setSuccess(false);
            serviceResponseStatus.setMessage(Constants.INTERNAL_SERVER_ERROR);
            userProfileResponse.setUser(null);
            userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
            break;
          case Constants.INVALID_TOKEN:
            serviceResponseStatus.setSuccess(false);
            serviceResponseStatus.setMessage(Constants.INVALID_TOKEN);
            userProfileResponse.setUser(null);
            userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
            break;
          default:
            User user = XMLUtils.unmarshalToUser(responseEntity.getBody());
            serviceResponseStatus.setSuccess(true);
            serviceResponseStatus.setMessage("success");
            userProfileResponse.setUser(user);
            userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
            break;
        }
      } else {
        serviceResponseStatus.setSuccess(false);
        serviceResponseStatus.setMessage("response from MYTHDPassport for /getUserProfile is either null or empty");
        userProfileResponse.setUser(null);
        userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
      }
    } catch (RestClientException rce){
      serviceResponseStatus.setSuccess(false);
      serviceResponseStatus.setMessage("rest client exception, " + rce.getMessage());
      userProfileResponse.setUser(null);
      userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
      LOG.error("RESTCLIENTEXCEPTION: SSOService getUserProfile ==> " + rce.toString());
    } catch (Exception e) {
      serviceResponseStatus.setSuccess(false);
      serviceResponseStatus.setMessage("exception, " + e.getMessage());
      userProfileResponse.setUser(null);
      userProfileResponse.setServiceResponseStatus(serviceResponseStatus);
      LOG.error("EXCEPTION: SSOService getUserProfile ==> " + e.toString());
    }
    LOG.info("END: SSOService getUserProfile");
    return userProfileResponse;
  }

  /**
   * Given a thdsso cookie, verify if the user still has a valid session
   * @param callingPrgm
   * @param thdSSOCookie
   * @return
   */
  public SessionValidResponse isSessionValid(String callingPrgm, String thdSSOCookie){
    LOG.info("STARTED: isSessionValid request");
    String isSessionValidURL = appInfo.getThdIsSessionValid() + "?callingProgram="+callingPrgm+"&thdsso=" + thdSSOCookie;
    SessionValidResponse sessionValidResponse = new SessionValidResponse();
    ServiceResponseStatus serviceResponseStatus = new ServiceResponseStatus();
    try {
      ResponseEntity<String> responseEntity = restTemplate.exchange(isSessionValidURL, HttpMethod.GET, null, String.class);
      if(responseEntity == null || StringUtils.isEmpty(responseEntity.getBody())){
        serviceResponseStatus.setMessage("user session is null");
        serviceResponseStatus.setSuccess(false);
        sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
        sessionValidResponse.setUserSession(null);
      } else {
        switch (responseEntity.getBody()){
          case Constants.CALLING_PRGM_NOT_SUPPLIED:
            serviceResponseStatus.setMessage(Constants.CALLING_PRGM_NOT_SUPPLIED);
            serviceResponseStatus.setSuccess(false);
            sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
            sessionValidResponse.setUserSession(null);
            break;
          case Constants.INTERNAL_SERVER_ERROR:
            serviceResponseStatus.setMessage(Constants.INTERNAL_SERVER_ERROR);
            serviceResponseStatus.setSuccess(false);
            sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
            sessionValidResponse.setUserSession(null);
            break;
          case Constants.INVALID_TOKEN:
            serviceResponseStatus.setMessage(Constants.INTERNAL_SERVER_ERROR);
            serviceResponseStatus.setSuccess(false);
            sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
            sessionValidResponse.setUserSession(null);
            break;
          default:
            UserSession userSession = XMLUtils.unmarshalToUserSession(responseEntity.getBody());
            serviceResponseStatus.setMessage("user session is available");
            serviceResponseStatus.setSuccess(true);
            sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
            sessionValidResponse.setUserSession(userSession);
            break;
        }
      }
    } catch (RestClientException rce){
      serviceResponseStatus.setMessage("exception, " + rce.getMessage());
      serviceResponseStatus.setSuccess(false);
      sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
      sessionValidResponse.setUserSession(null);
      LOG.error("RESTCLIENTEXCEPTION: SSOService isSessionValid ==> " + rce.toString());
    } catch (Exception e){
      serviceResponseStatus.setMessage("exception, " + e.getMessage());
      serviceResponseStatus.setSuccess(false);
      sessionValidResponse.setServiceResponseStatus(serviceResponseStatus);
      sessionValidResponse.setUserSession(null);
      LOG.error("EXCEPTION: SSOService isSessionValid ==> " + e.toString());
    }
    LOG.info("END: isSessionValid request");
    return sessionValidResponse;
  }

  public HttpHeaders buildHeader(){
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
    return headers;
  }

  public MultiValueMap<String, String> buildRequestForm(LoginRequest ssoLoginInfo){
    MultiValueMap<String, String> requsetFormMap = new LinkedMultiValueMap<>();
    requsetFormMap.add("j_storenumber", ssoLoginInfo.getStoreNbr().trim());
    requsetFormMap.add("j_username", ssoLoginInfo.getUsername().trim());
    requsetFormMap.add("j_password", ssoLoginInfo.getPassword().trim());
    requsetFormMap.add("callingProgram", ssoLoginInfo.getCallingPrgm().trim());
    requsetFormMap.add("successUrl", ssoLoginInfo.getSuccessUrl() == null || ssoLoginInfo.getSuccessUrl().isEmpty() ? "" : ssoLoginInfo.getSuccessUrl().trim());
    return requsetFormMap;
  }

  public HttpEntity<MultiValueMap<String, String>> buildRequestEntity(MultiValueMap<String, String> requestFormMap, HttpHeaders headers){
    HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<MultiValueMap<String, String>>(requestFormMap, headers);
    return requestEntity;
  }

}

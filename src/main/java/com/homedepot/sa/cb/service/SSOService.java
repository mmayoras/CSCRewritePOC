package com.homedepot.sa.cb.service;

import com.homedepot.sa.cb.model.AppInfo;
import com.homedepot.sa.cb.model.ServiceResponseStatus;
import com.homedepot.sa.cb.model.sso.LoginRequest;
import com.homedepot.sa.cb.model.sso.LoginResponse;
import com.homedepot.sa.cb.util.GeneralUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
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

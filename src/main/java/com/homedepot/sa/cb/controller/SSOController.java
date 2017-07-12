package com.homedepot.sa.cb.controller;

import com.homedepot.sa.cb.model.sso.LoginRequest;
import com.homedepot.sa.cb.model.sso.LoginResponse;
import com.homedepot.sa.cb.model.sso.SessionValidResponse;
import com.homedepot.sa.cb.model.sso.UserProfileResponse;
import com.homedepot.sa.cb.service.SSOService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by MXM6930 on 7/12/2017.
 */
@RestController
@RequestMapping("/api")
public class SSOController {

  @Autowired
  private SSOService ssoService;

  @RequestMapping(value = "/getUserProfile", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public UserProfileResponse getUserProfile(@RequestHeader(required = true) String thdSSOCookie,
      @RequestHeader(required = true) String callingPrgm) {
    UserProfileResponse userProfileResponse = ssoService.getUserProfile(thdSSOCookie, callingPrgm);
    return userProfileResponse;
  }

  @RequestMapping(value = "/isSessionValid", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public SessionValidResponse isSessionValid(@RequestHeader(required = true) String thdSSOCookie,
      @RequestHeader(required = true) String callingPrgm) {
    SessionValidResponse sessionValidResponse = ssoService
        .isSessionValid(callingPrgm, thdSSOCookie);
    return sessionValidResponse;
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public LoginResponse thdLogin(@Valid @RequestBody LoginRequest ssoLoginInfo) {
    LoginResponse response = ssoService.login(ssoLoginInfo);
    return response;
  }
}

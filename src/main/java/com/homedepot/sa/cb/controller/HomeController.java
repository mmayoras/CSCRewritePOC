package com.homedepot.sa.cb.controller;

import com.homedepot.sa.cb.model.sso.LoginRequest;
import com.homedepot.sa.cb.model.sso.LoginResponse;
import com.homedepot.sa.cb.service.SSOService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@Controller
public class HomeController {

  @Autowired
  private SSOService ssoService;

  @RequestMapping(value = "/")
  public String index() {
    return "index.html";
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public LoginResponse thdLogin(@Valid @RequestBody LoginRequest ssoLoginInfo){
    LoginResponse response = ssoService.login(ssoLoginInfo);
    return response;
  }

}

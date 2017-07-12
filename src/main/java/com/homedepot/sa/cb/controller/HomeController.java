package com.homedepot.sa.cb.controller;

import com.homedepot.sa.cb.service.SSOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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

}

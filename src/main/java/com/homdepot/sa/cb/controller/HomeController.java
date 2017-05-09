package com.homdepot.sa.cb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@Controller
public class HomeController
{
    @RequestMapping(value = "/")
    public String index()
    {
        return "index.html";
    }
}

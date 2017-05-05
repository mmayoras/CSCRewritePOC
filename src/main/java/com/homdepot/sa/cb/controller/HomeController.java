package com.homdepot.sa.cb.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@RestController
public class HomeController
{
    @RequestMapping(value = "/")
    public String index()
    {
        return "index.html";
    }
}

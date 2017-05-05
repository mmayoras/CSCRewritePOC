package hello.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@RestController
public class HelloController
{
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}

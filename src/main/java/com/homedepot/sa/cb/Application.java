package com.homedepot.sa.cb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.web.client.RestTemplate;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Bean
  @Scope("singleton")
  public RestTemplate restTemplate(){
    return new RestTemplate();
  }
}

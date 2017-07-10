package com.homedepot.sa.cb.model.sso;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Created by associate on 6/19/17.
 */
public class LoginRequest {
    @NotBlank(message = "storeNbr can't empty!")
    private String storeNbr;
    @NotBlank(message = "username can't empty!")
    private String username;
    @NotBlank(message = "password can't empty!")
    private String password;
    @NotBlank(message = "callingPrgm can't empty!")
    private String callingPrgm;
    private String successUrl;

    public String getStoreNbr() {
        return storeNbr;
    }

    public void setStoreNbr(String storeNbr) {
        this.storeNbr = storeNbr;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCallingPrgm() {
        return callingPrgm;
    }

    public void setCallingPrgm(String callingPrgm) {
        this.callingPrgm = callingPrgm;
    }

    public String getSuccessUrl() {
        return successUrl;
    }

    public void setSuccessUrl(String successUrl) {
        this.successUrl = successUrl;
    }

    @Override
    public String toString() {
        return "LoginRequest{" +
                "storeNbr='" + storeNbr + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", callingPrgm='" + callingPrgm + '\'' +
                ", successUrl='" + successUrl + '\'' +
                '}';
    }
}

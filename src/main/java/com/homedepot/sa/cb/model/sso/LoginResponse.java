package com.homedepot.sa.cb.model.sso;

import com.homedepot.sa.cb.model.ServiceResponseStatus;

/**
 * Created by associate on 6/19/17.
 */
public class LoginResponse {
    private ServiceResponseStatus serviceResponseStatus;
    private String msgFromService;
    private String thdSSOCookie;

    public ServiceResponseStatus getServiceResponseStatus() {
        return serviceResponseStatus;
    }

    public void setServiceResponseStatus(ServiceResponseStatus serviceResponseStatus) {
        this.serviceResponseStatus = serviceResponseStatus;
    }

    public String getMsgFromService() {
        return msgFromService;
    }

    public void setMsgFromService(String msgFromService) {
        this.msgFromService = msgFromService;
    }

    public String getThdSSOCookie() {
        return thdSSOCookie;
    }

    public void setThdSSOCookie(String thdSSOCookie) {
        this.thdSSOCookie = thdSSOCookie;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "serviceResponseStatus=" + serviceResponseStatus +
                ", msgFromService='" + msgFromService + '\'' +
                ", thdSSOCookie='" + thdSSOCookie + '\'' +
                '}';
    }
}

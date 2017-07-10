package com.homedepot.sa.cb.model.sso;

import com.homedepot.sa.cb.model.ServiceResponseStatus;

/**
 * Created by associate on 6/19/17.
 */
public class SessionValidResponse {
    private UserSession userSession;
    private ServiceResponseStatus serviceResponseStatus;

    public UserSession getUserSession() {
        return userSession;
    }

    public void setUserSession(UserSession userSession) {
        this.userSession = userSession;
    }

    public ServiceResponseStatus getServiceResponseStatus() {
        return serviceResponseStatus;
    }

    public void setServiceResponseStatus(ServiceResponseStatus serviceResponseStatus) {
        this.serviceResponseStatus = serviceResponseStatus;
    }

    @Override
    public String toString() {
        return "SessionValidResponse{" +
                "userSession=" + userSession +
                ", serviceResponseStatus=" + serviceResponseStatus +
                '}';
    }
}

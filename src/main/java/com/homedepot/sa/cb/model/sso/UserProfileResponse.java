package com.homedepot.sa.cb.model.sso;

import com.homedepot.sa.cb.model.ServiceResponseStatus;

/**
 * Created by associate on 6/19/17.
 */
public class UserProfileResponse {
    private ServiceResponseStatus serviceResponseStatus;
    private User user;

    public ServiceResponseStatus getServiceResponseStatus() {
        return serviceResponseStatus;
    }

    public void setServiceResponseStatus(ServiceResponseStatus serviceResponseStatus) {
        this.serviceResponseStatus = serviceResponseStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserProfileResponse{" +
                "serviceResponseStatus=" + serviceResponseStatus +
                ", user=" + user +
                '}';
    }
}

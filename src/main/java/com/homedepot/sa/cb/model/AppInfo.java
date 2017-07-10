package com.homedepot.sa.cb.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Created by VTL on 6/17/17.
 */
@Service
public class AppInfo {
    @Value(("${lifecycle}"))
    private String lifeCyle;

    @Value("${thdLoginURL}")
    private String thdLoginURL;

    @Value("${thdGetUserProfile}")
    private String thdGetUserProfile;

    @Value("${thdIsSessionValid}")
    private String thdIsSessionValid;

    public String getThdLoginURL() {
        return thdLoginURL;
    }

    public void setThdLoginURL(String thdLoginURL) {
        this.thdLoginURL = thdLoginURL;
    }

    public String getThdGetUserProfile() {
        return thdGetUserProfile;
    }

    public void setThdGetUserProfile(String thdGetUserProfile) {
        this.thdGetUserProfile = thdGetUserProfile;
    }

    public String getThdIsSessionValid() {
        return thdIsSessionValid;
    }

    public void setThdIsSessionValid(String thdIsSessionValid) {
        this.thdIsSessionValid = thdIsSessionValid;
    }

    public String getLifeCyle() {
        return lifeCyle;
    }

    public void setLifeCyle(String lifeCyle) {
        this.lifeCyle = lifeCyle;
    }

    @Override
    public String toString() {
        return "AppInfo{" +
                "lifeCyle='" + lifeCyle + '\'' +
                ", thdLoginURL='" + thdLoginURL + '\'' +
                ", thdGetUserProfile='" + thdGetUserProfile + '\'' +
                ", thdIsSessionValid='" + thdIsSessionValid + '\'' +
                '}';
    }
}

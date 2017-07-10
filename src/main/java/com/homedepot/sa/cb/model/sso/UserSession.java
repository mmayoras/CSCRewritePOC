package com.homedepot.sa.cb.model.sso;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by associate on 6/19/17.
    <IsSessionValid>
        <Valid>true</Valid>
    </IsSessionValid>
 */
@XmlRootElement(name = "IsSessionValid")
@XmlAccessorType(XmlAccessType.FIELD)
public class UserSession {
    @XmlElement(name = "Valid")
    private String valid;

    public void setValid(String valid) {
        this.valid = valid;
    }

    public String getValid() {
        return valid;
    }

    @Override
    public String toString() {
        return "UserSession{" +
                "valid='" + valid + '\'' +
                '}';
    }
}

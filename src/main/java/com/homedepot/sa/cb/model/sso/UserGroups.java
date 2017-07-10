package com.homedepot.sa.cb.model.sso;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;

/**
 * Created by associate on 6/19/17.
 <GetUserGroups>
     <GroupName>All Store Associates</GroupName>
     <GroupName>ECM Planograms</GroupName>
        ...
        ...
 </GetUserGroups>
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class UserGroups {
    @XmlElement(name="GroupName")
    private List<String> groups;

    //@XmlElementWrapper
    //@XmlElement(name="GroupName")
    public List<String> getGroups() {
        return groups;
    }

    public void setGroups(List<String> groups) {
        this.groups = groups;
    }

    @Override
    public String toString() {
        return "UserGroups{" +
                "groups=" + groups +
                '}';
    }
}

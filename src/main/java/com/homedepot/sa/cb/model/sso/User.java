package com.homedepot.sa.cb.model.sso;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by associate on 6/19/17.
 <GetUserProfile>
    <UserProfile>
         <UserID>DTS001</UserID>
         <FirstName>DPT</FirstName>
         <LastName>SUP</LastName>
         <MiddleName>T</MiddleName>
         <GenerationQualifier/>
         <BusinessUnitID>1</BusinessUnitID>
         <DepartmentNumber>22</DepartmentNumber>
         <EMailAddress/>
         <JobTitle>PDTSUP</JobTitle>
         <LocationNumber>9751</LocationNumber>
         <LocationType>STR</LocationType>
         <PreferredLanguage/>
         <SysusrID>10d42*586710981787059860</SysusrID>
         <TelephoneNumber/>
         <JobDesignation>401</JobDesignation>
    </UserProfile>
    <GetUserGroups>
        <GroupName>All Store Associates</GroupName>
        <GroupName>ECM Planograms</GroupName>
    </GetUserGroups>
 </GetUserProfile>
 */
@XmlRootElement(name = "GetUserProfile")
@XmlAccessorType(XmlAccessType.FIELD)
public class User {
    @XmlElement(name = "UserProfile")
    private UserProfile userProfile;
    @XmlElement(name = "GetUserGroups")
    private UserGroups userGroups;

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public UserGroups getUserGroups() {
        return userGroups;
    }

    public void setUserGroups(UserGroups userGroups) {
        this.userGroups = userGroups;
    }

    @Override
    public String toString() {
        return "User{" +
                "userProfile=" + userProfile +
                ", userGroups=" + userGroups +
                '}';
    }
}

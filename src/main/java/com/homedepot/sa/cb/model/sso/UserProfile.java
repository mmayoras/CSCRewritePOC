package com.homedepot.sa.cb.model.sso;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;

/**
 * Created by associate on 6/19/17.
 <UserProfile>
     <UserID>DTS001</UserID>
     <FirstName>DPT</FirstName>
     <LastName>SUP</LastName>
     <MiddleName>T</MiddleName>
     <GenerationQualifier />
     <BusinessUnitID>1</BusinessUnitID>
     <DepartmentNumber>22</DepartmentNumber>
     <EMailAddress />
     <JobTitle>PDTSUP</JobTitle>
     <LocationNumber>9751</LocationNumber>
     <LocationType>STR</LocationType>
     <PreferredLanguage />
     <SysusrID>10d42*586710981787059860</SysusrID>
     <TelephoneNumber />
     <JobDesignation>401</JobDesignation>
 </UserProfile>
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class UserProfile {
    @XmlElement(name = "UserID")
    private String userId;

    @XmlElement(name = "FirstName")
    private String firstName;

    @XmlElement(name = "LastName")
    private String lastName;

    @XmlElement(name = "MiddleName")
    private String middleName;

    @XmlElement(name = "GenerationQualifier")
    private String generationQualifier;

    @XmlElement(name = "BusinessUnitID")
    private String businessUnitId;

    @XmlElement(name = "DepartmentNumber")
    private String departmentNbr;

    @XmlElement(name = "EMailAddress")
    private String emailAddress;

    @XmlElement(name = "JobTitle")
    private String jobTitle;

    @XmlElement(name = "LocationNumber")
    private String locationNumber;

    @XmlElement(name = "LocationType")
    private String locationType;

    @XmlElement(name = "PreferredLanguage")
    private String preferredLanguage;

    @XmlElement(name = "SysusrID")
    private String sysursId;

    @XmlElement(name = "TelephoneNumber")
    private String telephoneNbr;

    @XmlElement(name = "JobDesignation")
    private String jobDesignation;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getGenerationQualifier() {
        return generationQualifier;
    }

    public void setGenerationQualifier(String generationQualifier) {
        this.generationQualifier = generationQualifier;
    }

    public String getBusinessUnitId() {
        return businessUnitId;
    }

    public void setBusinessUnitId(String businessUnitId) {
        this.businessUnitId = businessUnitId;
    }

    public String getDepartmentNbr() {
        return departmentNbr;
    }

    public void setDepartmentNbr(String departmentNbr) {
        this.departmentNbr = departmentNbr;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getLocationNumber() {
        return locationNumber;
    }

    public void setLocationNumber(String locationNumber) {
        this.locationNumber = locationNumber;
    }

    public String getLocationType() {
        return locationType;
    }

    public void setLocationType(String locationType) {
        this.locationType = locationType;
    }

    public String getPreferredLanguage() {
        return preferredLanguage;
    }

    public void setPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
    }

    public String getSysursId() {
        return sysursId;
    }

    public void setSysursId(String sysursId) {
        this.sysursId = sysursId;
    }

    public String getTelephoneNbr() {
        return telephoneNbr;
    }

    public void setTelephoneNbr(String telephoneNbr) {
        this.telephoneNbr = telephoneNbr;
    }

    public String getJobDesignation() {
        return jobDesignation;
    }

    public void setJobDesignation(String jobDesignation) {
        this.jobDesignation = jobDesignation;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
                "userId='" + userId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", generationQualifier='" + generationQualifier + '\'' +
                ", businessUnitId='" + businessUnitId + '\'' +
                ", departmentNbr='" + departmentNbr + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", locationNumber='" + locationNumber + '\'' +
                ", locationType='" + locationType + '\'' +
                ", preferredLanguage='" + preferredLanguage + '\'' +
                ", sysursId='" + sysursId + '\'' +
                ", telephoneNbr='" + telephoneNbr + '\'' +
                ", jobDesignation='" + jobDesignation + '\'' +
                '}';
    }
}

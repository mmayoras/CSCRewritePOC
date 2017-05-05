package com.homdepot.sa.cb.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@Entity
public class CommercialApplication
{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long appId;

    private Long id;
    private String firstName;
    private String lastName;
    private String strNumber;
    private Date date;

    private CommercialApplication() {}

    public CommercialApplication(Long id, String firstName, String lastName, String strNumber, Date date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.strNumber = strNumber;
        this.date = date;
    }

    public Long getAppId() {
        return appId;
    }

    public void setAppId(Long appId) {
        this.appId = appId;
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

    public String getStrNumber() {
        return strNumber;
    }

    public void setStrNumber(String strNumber) {
        this.strNumber = strNumber;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "CommercialApplication{" +
                "appId=" + appId +
                ", id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", strNumber='" + strNumber + '\'' +
                ", date=" + date +
                '}';
    }
}

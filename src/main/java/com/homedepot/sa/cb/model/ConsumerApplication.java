package com.homedepot.sa.cb.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@Entity
public class ConsumerApplication
{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long appId;

    private Long id;
    private String firstName;
    private String middleInitial;
    private String lastName;
    private String strNumber;
    private Date date;
    private String city;
    private String state;
    private String addressLine1;
    private String addressLine2;
    private String driverLicense;
    private String email;

    private ConsumerApplication() {}

    public ConsumerApplication(Long id, String firstName, String middleInitial,
        String lastName, String strNumber, Date date, String city, String state,
        String addressLine1, String addressLine2, String driverLicense, String email) {
      this.id = id;
      this.firstName = firstName;
      this.middleInitial = middleInitial;
      this.lastName = lastName;
      this.strNumber = strNumber;
      this.date = date;
      this.city = city;
      this.state = state;
      this.addressLine1 = addressLine1;
      this.addressLine2 = addressLine2;
      this.driverLicense = driverLicense;
      this.email = email;
    }

    public String getMiddleInitial() {
        return middleInitial;
      }

    public void setMiddleInitial(String middleInitial) {
      this.middleInitial = middleInitial;
    }

    public String getCity() {
      return city;
    }

    public void setCity(String city) {
      this.city = city;
    }

    public String getState() {
      return state;
    }

    public void setState(String state) {
      this.state = state;
    }

    public String getAddressLine1() {
      return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
      this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
      return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
      this.addressLine2 = addressLine2;
    }

    public String getDriverLicense() {
      return driverLicense;
    }

    public void setDriverLicense(String driverLicense) {
      this.driverLicense = driverLicense;
    }

    public String getEmail() {
      return email;
    }

    public void setEmail(String email) {
      this.email = email;
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
    return "ConsumerApplication{" +
        "appId=" + appId +
        ", id=" + id +
        ", firstName='" + firstName + '\'' +
        ", middleInitial='" + middleInitial + '\'' +
        ", lastName='" + lastName + '\'' +
        ", strNumber='" + strNumber + '\'' +
        ", date=" + date +
        ", city='" + city + '\'' +
        ", state='" + state + '\'' +
        ", addressLine1='" + addressLine1 + '\'' +
        ", addressLine2='" + addressLine2 + '\'' +
        ", driverLicense='" + driverLicense + '\'' +
        ", email='" + email + '\'' +
        '}';
  }
}

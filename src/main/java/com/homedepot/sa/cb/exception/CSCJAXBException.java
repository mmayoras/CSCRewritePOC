package com.homedepot.sa.cb.exception;

/**
 * Created by vle on 9/24/2015.
 */
public class CSCJAXBException extends Exception{
    private String msg;
    private int cd;

    public CSCJAXBException(String msg, int cd){
        this.msg = msg;
        this.cd = cd;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCd() {
        return cd;
    }

    public void setCd(int cd) {
        this.cd = cd;
    }

    @Override
    public String toString() {
        return "CSCJAXBException{" +
                "msg='" + msg + '\'' +
                ", cd=" + cd +
                '}';
    }
}

package com.homedepot.sa.cb.util;

import com.homedepot.sa.cb.exception.CSCGeneralException;
import java.util.List;
import org.springframework.http.HttpHeaders;

/**
 * Created by associate on 6/19/17.
 */
public class GeneralUtils {
    public static String extractTHDSSOCookieFromHeader(HttpHeaders headers) throws CSCGeneralException {
        if(headers == null || headers.get("Set-Cookie").isEmpty()){
            throw new CSCGeneralException("header is null or no header is available", -2);
        }
        List<String> headerCookies = headers.get("Set-Cookie");
        String cookie = headerCookies.get(2);
        String thdssoCookie = cookie.replace("THDSSO=", "");
        int indexAtSemicolon = thdssoCookie.indexOf(";");
        return thdssoCookie.substring(0, indexAtSemicolon).trim();
    }
}

package com.homedepot.sa.cb.util;

import com.homedepot.sa.cb.exception.CSCJAXBException;
import com.homedepot.sa.cb.model.sso.User;
import com.homedepot.sa.cb.model.sso.UserSession;
import java.io.StringReader;
import java.io.StringWriter;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;

/**
 * Created by VTL on 6/17/17.
 */
public class XMLUtils {
    public static UserSession unmarshalToUserSession(String xml) throws CSCJAXBException {
        UserSession userSession;
        try{
            StreamSource ss = new StreamSource(new StringReader(xml));
            JAXBContext context = JAXBContext.newInstance(UserSession.class);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            userSession = (UserSession) unmarshaller.unmarshal(ss);
        }catch (JAXBException jaxbe){
            throw new CSCJAXBException("unable to unmarshal xml to pojo: " + jaxbe.getMessage(), -1);
        }catch (Exception e){
            throw new CSCJAXBException("unable to unmarshal xml to pojo: " + e.getMessage(), -1);
        }
        return userSession;
    }

    public static User unmarshalToUser(String xml) throws CSCJAXBException {
        User user;
        try{
            StreamSource ss = new StreamSource(new StringReader(xml));
            JAXBContext context = JAXBContext.newInstance(User.class);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            user = (User) unmarshaller.unmarshal(ss);
        }catch (JAXBException jaxbe){
            throw new CSCJAXBException("unable to unmarshal xml to pojo: " + jaxbe.getMessage(), -1);
        }catch (Exception e){
            throw new CSCJAXBException("unable to unmarshal xml to pojo: " + e.getMessage(), -1);
        }
        return user;
    }

    public static String marshalPojoToXML(UserSession userSession) throws CSCJAXBException {
        StringWriter sw;
        try{
            JAXBContext jaxbContext = JAXBContext.newInstance(UserSession.class);
            Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
            jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
            sw = new StringWriter();
            jaxbMarshaller.marshal(userSession, sw);
        }catch (JAXBException jaxbe){
            throw new CSCJAXBException("unable to unmarshal xml to pojo: " + jaxbe.getMessage(), -1);
        }catch (Exception e){
            throw new CSCJAXBException("unable to unmarshal xml to pojo: " + e.getMessage(), -1);
        }
        return sw.toString();
    }
}

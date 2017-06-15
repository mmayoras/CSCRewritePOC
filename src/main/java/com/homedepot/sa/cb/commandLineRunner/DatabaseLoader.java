package com.homedepot.sa.cb.commandLineRunner;

import com.homedepot.sa.cb.model.CommercialApplication;
import com.homedepot.sa.cb.model.ConsumerApplication;
import com.homedepot.sa.cb.repository.CommercialAppRepository;
import com.homedepot.sa.cb.repository.ConsumerAppRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by MXM6930 on 5/5/2017.
 */
@Component
public class DatabaseLoader implements CommandLineRunner
{
    private final ConsumerAppRepository conRepository;
    private final CommercialAppRepository comRepository;

    @Autowired
    public DatabaseLoader(ConsumerAppRepository consumerRepository, CommercialAppRepository commercialRepository)
    {
        this.conRepository = consumerRepository;
        this.comRepository = commercialRepository;
    }

    @Override
    public void run(String... strings) throws Exception
    {
        // Save ConsumerApplication records in DB
        this.conRepository.save(new ConsumerApplication(new Long(1),"Homer", "A",
            "Depot", "9741", new Date(), "Smyrna", "GA", "3375 SpringHill Pkwy",
            "Apt 325", "GA12345", "test@test.com"));

        // Save CommercialApplication records in DB
        this.comRepository.save(new CommercialApplication(new Long(1),"Homer", "A",
            "Depot", "1234", new Date(), "Smyrna", "GA", "3375 SpringHill Pkwy",
            "Apt 325", "GA12345", "test2@test.com"));
    }
}

package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class WorkExperience {

    private String title;
    private String company;
    private String location;
    private String tenure;

    public String getTitle(){
        return this.title;
    }

    public String getCompany(){
        return this.company;
    }

    public String getLocation(){
        return this.location;
    }

    public String getTenure(){
        return this.tenure;
    }
}
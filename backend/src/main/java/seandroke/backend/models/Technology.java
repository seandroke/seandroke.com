package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class Technology {
    private String technology;
    private String logo;

    public String getTechnology(){
        return this.technology;
    }
    public String getLogo(){
        return this.logo;
    }
}
package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class Footer {

    private String name;
    private String title;
    private String phone;
    private String email;

    public String getName(){
        return this.name;
    }
    public String getTitle(){
        return this.title;
    }
    public String getPhone(){
        return this.phone;
    }
    public String getEmail(){
        return this.email;
    }

}
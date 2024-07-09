package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class Location {

    private String location;
    private String description;
    private String img;
    private String availability;
    private int x;
    private int y;
    private String status;
    
    public String getLocation(){
        return this.location;
    }
    public String getDescription(){
        return this.description;
    }
    public String getImg(){
        return this.img;
    }
    public String getAvailability(){
        return this.availability;
    }
    public int getX(){
        return this.x;
    }
    public int getY(){
        return this.y;
    }
    public String getStatus(){
        return this.status;
    }

}


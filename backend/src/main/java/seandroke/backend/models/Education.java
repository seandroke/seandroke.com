package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class Education {

    private String heading;
    private String img;
    private String degree;
    private String tenure;

    public String getHeading(){
        return heading;
    }

    public String getImg(){
        return img;
    }

    public String getDegree(){
        return degree;
    }

    public String getTenure(){
        return tenure;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public void setDegree(String degree){
        this.degree = degree;
    }

    public void setTenure(String tenure){
        this.tenure = tenure;
    }
    
}

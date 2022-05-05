package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger;

public class Project {
    private String name;
    private String description;

    public String getName(){
        return this.name;
    }

    public String getDescription(){
        return this.description;
    }
}
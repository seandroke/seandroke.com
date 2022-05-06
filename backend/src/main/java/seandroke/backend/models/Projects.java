package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class Projects {

    private String company;
    private String title;
    private String logo;
    @Field("Projects")
    private List<Project> projects;

    private class Project {
        private String name;
        private String description;
    
        public String getName(){
            return this.name;
        }
    
        public String getDescription(){
            return this.description;
        }
    }

    public String getCompany(){
        return this.company;
    }
    public String getTitle(){
        return this.title;
    }
    public String getLogo(){
        return this.logo;
    }
    public List<Project> getProjects(){
        return this.projects;
    }

}

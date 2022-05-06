package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class Experience {

    @Field("WorkExperience")
    private List<WorkExperience> workExperience;
    @Field("Languages")
    private List<Languages> languages;
    @Field("WebFrameworks")
    private WebFrameworks webFrameworks;
    @Field("DataEngineering")
    private DataEngineering dataEngineering;

    private class WorkExperience {

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

    private class Languages {
    
        private String language;
        private String proficiency;
        private String logo;
    
        public String getLanguage(){
            return this.language;
        }
    
        public String getProficiency(){
            return this.proficiency;
        }
    
        public String getLogo(){
            return this.logo;
        }
    }

    private static class Technology {
        private String technology;
        private String logo;
    
        public String getTechnology(){
            return this.technology;
        }
        public String getLogo(){
            return this.logo;
        }
    }

    private class WebFrameworks {
        @Field("BackEnd")
        private List<Experience.Technology> backend;
        @Field("FrontEnd")
        private List<Experience.Technology> frontend;
        @Field("CSS")
        private List<Experience.Technology> css;
    
        public List<Experience.Technology> getBackend() {
            return this.backend;
        }
    
        public List<Experience.Technology> getFrontend() {
            return this.frontend;
        }
    
        public List<Experience.Technology> getCss() {
            return this.css;
        }
    }

    private class DataEngineering {
        @Field("SQL")
        private List<Experience.Technology> sql;
        @Field("BigData")
        private List<Experience.Technology> bigData;
        @Field("NoSQL")
        private List<Experience.Technology> noSql;
    
        public List<Experience.Technology> getSql(){
            return this.sql;
        }
        public List<Experience.Technology> getBigData(){
            return this.bigData;
        }
        public List<Experience.Technology> getNoSql(){
            return this.noSql;
        }
    }

    public List<WorkExperience> getWorkExperience(){
        return this.workExperience;
    }

    public List<Languages> getLanguages(){
        return this.languages;
    }

    public WebFrameworks getWebFrameworks(){
        return this.webFrameworks;
    }

    public DataEngineering getDataEngineering(){
        return this.dataEngineering;
    }
    
}

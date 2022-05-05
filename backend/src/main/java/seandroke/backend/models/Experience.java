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

package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

class Languages {
    
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
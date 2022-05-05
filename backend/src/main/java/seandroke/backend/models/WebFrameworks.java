package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class WebFrameworks {
    @Field("BackEnd")
    private List<Technology> backend;
    @Field("FrontEnd")
    private List<Technology> frontend;
    @Field("CSS")
    private List<Technology> css;

    public List<Technology> getBackend() {
        return this.backend;
    }

    public List<Technology> getFrontend() {
        return this.frontend;
    }

    public List<Technology> getCss() {
        return this.css;
    }
}
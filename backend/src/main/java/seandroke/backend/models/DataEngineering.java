package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

public class DataEngineering {
    @Field("SQL")
    private List<Technology> sql;
    @Field("BigData")
    private List<Technology> bigData;
    @Field("NoSQL")
    private List<Technology> noSql;

    public List<Technology> getSql(){
        return this.sql;
    }
    public List<Technology> getBigData(){
        return this.bigData;
    }
    public List<Technology> getNoSql(){
        return this.noSql;
    }
}
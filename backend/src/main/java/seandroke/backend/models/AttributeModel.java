package seandroke.backend;

import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigInteger; 

@Document(collection = "attributes")
public class AttributeModel {

    @Id
    private BigInteger id;
    @Field("BannerNav")
    private BannerNav bannerNav;
    @Field("Education")
    private Education education;
    @Field("Experience")
    private Experience experience;
    @Field("Projects")
    private List<Projects> projects;
    @Field("AboutMe")
    private AboutMe aboutMe;
    @Field("Location")
    private Location location;
    @Field("Footer")
    private Footer footer;

    public BigInteger getId() {
        return id;
    }

    public BannerNav getBannerNav(){
        return bannerNav;
    }

    public Education getEducation(){
        return education;
    }

    public Experience getExperience(){
        return experience;
    }

    public List<Projects> getProjects(){
        return projects;
    }

    public AboutMe getAboutMe(){
        return aboutMe;
    }

    public Location getLocation(){
        return location;
    }

    public Footer getFooter(){
        return footer;
    }
    
}

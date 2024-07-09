package seandroke.backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Query;

@Repository
public interface AttributeRepository extends MongoRepository < AttributeModel, Long > {
    
    public AttributeModel findFirstByOrderByIdDesc();
}

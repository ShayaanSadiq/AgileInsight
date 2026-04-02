package com.agileinsight.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Sprint;

public interface SprintRepository extends MongoRepository<Sprint, ObjectId>{
    
    
}

package com.agileinsight.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Sprint;

public interface SprintRepository extends MongoRepository<Sprint, String>{
    
    
}

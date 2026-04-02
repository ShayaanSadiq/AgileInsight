package com.agileinsight.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Manager;
import com.mongodb.lang.Nullable;

public interface ManagerRepository extends MongoRepository<Manager, String>{
    
    @Nullable 
    Manager findByEmail(String email);
}

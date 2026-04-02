package com.agileinsight.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Organisation;
import com.mongodb.lang.Nullable;

public interface OrganisationRepository extends MongoRepository<Organisation, String>{
    
    @Nullable 
    Organisation findByEmail(String email);
}

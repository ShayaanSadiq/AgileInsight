package com.agileinsight.backend.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.projection.ManagerProjectionView;
import com.mongodb.lang.Nullable;

public interface ManagerRepository extends MongoRepository<Manager, String>{
    
    @Nullable 
    Manager findByEmail(String email);

    ArrayList<Manager> findByOrganisationId(String organisationId);

    Optional<ManagerProjectionView> findProjectedById(String managerId);
}

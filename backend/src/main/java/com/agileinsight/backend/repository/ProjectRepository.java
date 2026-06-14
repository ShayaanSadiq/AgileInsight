package com.agileinsight.backend.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Project;
import com.mongodb.lang.Nullable;

public interface ProjectRepository extends MongoRepository<Project, String>{
    
    ArrayList<Project> findByOrganisationId(String organisationId);

    @Nullable
    Project findByName(String name);

    ArrayList<Project> findByManagerId(String managerId);

    
}

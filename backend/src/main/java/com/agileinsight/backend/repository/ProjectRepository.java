package com.agileinsight.backend.repository;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Project;
import com.mongodb.lang.Nullable;

public interface ProjectRepository extends MongoRepository<Project, ObjectId>{
    
    @Nullable
    ArrayList<Project> findByOrganisationId(String organisationId);

    @Nullable
    Project findByName(String name);

}

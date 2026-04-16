package com.agileinsight.backend.repository;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.model.defaultoptions.Status;

public interface SprintRepository extends MongoRepository<Sprint, String>{
    long countByProjectId(String projectId);

    long countByProjectIdAndStatus(String projectId, Status status);

    ArrayList<Sprint> findByProjectId(String projectId);
}

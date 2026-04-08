package com.agileinsight.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.model.Status;

public interface SprintRepository extends MongoRepository<Sprint, String>{
    long countByProjectId(String projectId);

    long countByProjectIdAndStatus(String projectId, Status status);
}

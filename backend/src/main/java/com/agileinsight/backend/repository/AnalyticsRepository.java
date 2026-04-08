package com.agileinsight.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agileinsight.backend.model.Analytics;
import com.mongodb.lang.Nullable;

@Repository
public interface AnalyticsRepository extends MongoRepository<Analytics, String>{

    @Nullable
    Analytics findByProjectId(String projectId);
}

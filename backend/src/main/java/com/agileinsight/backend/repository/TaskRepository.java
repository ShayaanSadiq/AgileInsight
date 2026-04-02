package com.agileinsight.backend.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Task;
import com.mongodb.lang.Nullable;

public interface TaskRepository extends MongoRepository<Task, ObjectId>{
    
    @Nullable
    List<Task> findByProjectId(String projectId);

    @Nullable
    Task findByName(String name);

}

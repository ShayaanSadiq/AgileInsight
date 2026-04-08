package com.agileinsight.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Status;
import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.Type;
import com.mongodb.lang.Nullable;

public interface TaskRepository extends MongoRepository<Task, String>{
    
    @Nullable
    List<Task> findByProjectId(String projectId);

    @Nullable
    Task findByName(String name);

    @Nullable
    Optional<Task> findById(String id);

    @Nullable
    void deleteById(String id);

    long countByProjectId(String projectId);

    long countByProjectIdAndStatus(String projectId, Status status);

    long countByProjectIdAndType(String projectId, Type type);

    long countByProjectIdAndStatusAndType(String projectId, Status status, Type type);
}

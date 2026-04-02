package com.agileinsight.backend.service.project;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class DeleteProject {

    @Autowired
    private ProjectRepository projectRepository;
    
    public ObjectId deleteProject(ObjectId id) {
        
        projectRepository.deleteById(id);
        return id;
    }
}

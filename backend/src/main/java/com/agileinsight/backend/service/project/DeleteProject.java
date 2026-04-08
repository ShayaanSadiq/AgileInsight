package com.agileinsight.backend.service.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class DeleteProject {

    @Autowired
    private ProjectRepository projectRepository;
    
    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }
}

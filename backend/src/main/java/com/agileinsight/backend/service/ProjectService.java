package com.agileinsight.backend.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.service.project.CreateProject;
import com.agileinsight.backend.service.project.DeleteProject;

@Service
public class ProjectService {

    @Autowired
    private CreateProject create;

    @Autowired
    private DeleteProject delete;

    public String createProject(Project project) {
        return create.createProject(project);
    }

    public ObjectId deleteProject(ObjectId id) {
        delete.deleteProject(id);
        return id;
    }
}

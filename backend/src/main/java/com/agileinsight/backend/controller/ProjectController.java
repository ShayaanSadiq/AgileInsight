package com.agileinsight.backend.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.service.ProjectService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {
    
    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectRepository projectRepository;
    
    @PostMapping("/create")
    public Project createProject(@RequestBody @Valid Project project) {
        return projectService.createProject(project);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable String id) {
        ObjectId objectId = new ObjectId(id);
        
        projectService.deleteProject(objectId);

        if(projectRepository.existsById(objectId)) {
            throw new RuntimeException("Project not deleted.");
        } else {
        return ResponseEntity.ok(id);
        }
    }
}

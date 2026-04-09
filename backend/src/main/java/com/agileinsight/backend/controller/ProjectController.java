package com.agileinsight.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.dto.ProjectUpdateDTO;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.service.AnalyticsService;
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

    @Autowired
    private AnalyticsService analyticsService;
    
    @PostMapping("/create")
    public ResponseEntity<?> createProject(@RequestBody @Valid Project project) {
        Project createdProject = projectService.createProject(project);

        if(createdProject != null) {
            analyticsService.createAnalytics(project.getId(), project.getExpectedSprints());

            return ResponseEntity.ok(Map.of(
                "message", "Project created successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message", "Project not created"
            ));
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable String id) {
        projectService.deleteProject(id);

        if(projectRepository.findById(id) != null) {
            return ResponseEntity.ok(Map.of(
                "message","Project deleted successfully"
            ));
        } else {
        return ResponseEntity.ok(Map.of(
            "message","Project not deleted"
        ));
        }
    }

    @PatchMapping("/update/{projectId}")
    public ResponseEntity<?> updateProject(@PathVariable @Valid String projectId, @RequestBody @Valid ProjectUpdateDTO projectUpdateDTO) {
        boolean updated = projectService.updateProject(projectId, projectUpdateDTO);

        if(updated) {
            return ResponseEntity.ok(Map.of(
                "message","Project updated successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Project not updated"
            ));
        }
        
    }
}

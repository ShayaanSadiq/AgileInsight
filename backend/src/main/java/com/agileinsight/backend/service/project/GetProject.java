package com.agileinsight.backend.service.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class GetProject {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ManagerRepository managerRepository;

    public ProjectResponse getProject(String projectId) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if (project == null) {
            return null; 
        }

        Manager manager = null;
        if(project.getManagerId() != null) {
            manager = managerRepository
            .findById(project.getManagerId() )
            .orElse(null);
        }

        return new ProjectResponse(
            project.getId(),
            project.getName(),
            project.getDescription(),
            project.getCurrentSprintNumber(),
            project.getCurrentSprintId(),
            project.getStartDate(),
            project.getEndDate(),
            manager,
            project.getOrganisationId(),
            project.getExpectedSprints(),
            project.getStatus()
        );
    }
}


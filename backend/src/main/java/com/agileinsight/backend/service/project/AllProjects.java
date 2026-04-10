package com.agileinsight.backend.service.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class AllProjects {
    
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ManagerRepository managerRepository;

    public List<ProjectResponse> getAllOrganisationProjects(String organisationId) {
        List<Project> projects = projectRepository.findByOrganisationId(organisationId);

        return projects.stream().map(project -> {

            Manager manager = managerRepository
                .findById(project.getManagerId())
                .orElse(null);

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

        }).toList();
    }

    public List<ProjectResponse> getAllManagerProjects(String managerId) {
        List<Project> projects = projectRepository.findByManagerId(managerId);

        return projects.stream().map(project -> {

            Manager manager = managerRepository
                .findById(managerId)
                .orElse(null);

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

        }).toList();
    }
}

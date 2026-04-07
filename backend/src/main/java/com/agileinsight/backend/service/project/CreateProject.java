package com.agileinsight.backend.service.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class CreateProject {

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public String createProject(Project project) {
        System.out.println(project.getId());
        boolean exists = organisationRepository.existsById(project.getOrganisationId());

        if(!exists) {
            System.out.println("Organisation not found.");
            return "Project not created";
        } else {
            projectRepository.save(project);
            return "Project created successfully";
        }
    }
}

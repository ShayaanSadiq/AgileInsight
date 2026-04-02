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

    public Project createProject(Project project) {
        System.out.println(project.getId());
        boolean exists = organisationRepository.existsById(project.getOrganisationId());

        if(!exists) {
            throw new RuntimeException("Organisation not found.");
        } else {
            return projectRepository.save(project);
        }
    }
}

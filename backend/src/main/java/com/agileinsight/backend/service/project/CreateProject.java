package com.agileinsight.backend.service.project;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.model.Status;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class CreateProject {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private OrganisationRepository organisationRepository;

    public Project createProject(Project project) {
        String organisationId = project.getOrganisationId();

        if(organisationRepository.existsById(organisationId) && 
           project.getStartDate().isAfter(LocalDate.now().minusDays(1)) && 
           project.getEndDate().isAfter(project.getStartDate())) {

            if(project.getStartDate().equals(LocalDate.now())) {
                project.setStatus(Status.IN_PROGRESS);
            } else {
                project.setStatus(Status.YET_TO_START);
            }

            Project project1 = projectRepository.save(project);

            if(project1 != null) {
                return project1;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}

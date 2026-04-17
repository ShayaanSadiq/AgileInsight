package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.model.dto.ProjectUpdateDTO;
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.service.project.AllProjects;
import com.agileinsight.backend.service.project.CreateProject;
import com.agileinsight.backend.service.project.DeleteProject;
import com.agileinsight.backend.service.project.GetProject;
import com.agileinsight.backend.service.project.UpdateProject;

@Service
public class ProjectService {

    @Autowired
    private CreateProject createProject;

    @Autowired
    private DeleteProject deleteProject;

    @Autowired
    private AllProjects allProjects;

    @Autowired
    private GetProject getProject;

    @Autowired
    private UpdateProject updateProject;

    public Project createProject(Project project, String organisationId) {
        return createProject.createProject(project, organisationId);
    }

    public void deleteProject(String id) {
        deleteProject.deleteProject(id);
    }

    public List<ProjectResponse> getAllOrganisationProjects(String organisationId) {
        return allProjects.getAllOrganisationProjects(organisationId);
    }

    public List<ProjectResponse> getAllManagerProjects(String managerId) {
        return allProjects.getAllManagerProjects(managerId);
    }

    public ProjectResponse getProject(String projectId) {
        return getProject.getProject(projectId);
    }

    public boolean updateProject(String projectId, ProjectUpdateDTO projectUpdateDTO) {
        return updateProject.updateProject(projectId, projectUpdateDTO);
    }
}

package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.ProjectResponse;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.service.project.AllProjects;
import com.agileinsight.backend.service.project.CreateProject;
import com.agileinsight.backend.service.project.DeleteProject;
import com.agileinsight.backend.service.project.GetProject;

@Service
public class ProjectService {

    @Autowired
    private CreateProject create;

    @Autowired
    private DeleteProject delete;

    @Autowired
    private AllProjects allProjects;

    @Autowired
    private GetProject getProject;

    public Project createProject(Project project) {
        return create.createProject(project);
    }

    public void deleteProject(String id) {
        delete.deleteProject(id);
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
}

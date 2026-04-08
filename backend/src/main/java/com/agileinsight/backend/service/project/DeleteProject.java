package com.agileinsight.backend.service.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.service.AnalyticsService;

@Component
public class DeleteProject {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private AnalyticsService analyticsService;
    
    public void deleteProject(String id) {
        projectRepository.deleteById(id);
        analyticsService.deleteAnalytics(id);
    }
}

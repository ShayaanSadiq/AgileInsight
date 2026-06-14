package com.agileinsight.backend.service.sprint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.repository.SprintRepository;
import com.agileinsight.backend.service.AnalyticsService;

import java.util.Objects;
import java.util.Optional;

@Component
public class CreateSprint {
    
    @Autowired
    private SprintRepository sprintRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private AnalyticsService analyticsService;

    public Sprint createSprint(Sprint sprint) {
        String projectId = sprint.getProjectId();

        if(projectRepository.findById(projectId).equals(Optional.empty())) {
            Sprint sprint1 = sprintRepository.save(sprint);

            Objects.requireNonNull(projectRepository.findById(projectId).orElse(null)).setCurrentSprintNumber(1);
            Objects.requireNonNull(projectRepository.findById(projectId).orElse(null)).setCurrentSprintId(sprint1.getId());

            analyticsService.incrementSprint(projectId);
            return sprint1;
        } else {
            return null;
        }
    }
}

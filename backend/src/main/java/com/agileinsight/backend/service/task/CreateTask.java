package com.agileinsight.backend.service.task;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.defaultoptions.Type;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.repository.SprintRepository;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.service.AnalyticsService;

@Component
public class CreateTask {
    
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private SprintRepository sprintRepository;

    @Autowired
    private AnalyticsService analyticsService;

    @Autowired
    private TaskRepository taskRepository;
    
    public Task createTask(Task task) {
        String projectId = task.getProjectId();
        String sprintId = task.getSprintId();

        if(projectRepository.existsById(projectId) && 
           sprintRepository.existsById(sprintId) && 
           task.getStartDate().isAfter(LocalDate.now().minusDays(1)) && 
           task.getEndDate().isAfter(task.getStartDate()) &&
           task.getStatus() == null) {
            Task task1 = taskRepository.save(task);

            if(task1 != null) {
                if(task1.getType() == Type.BUG) {
                    analyticsService.incrementBug(projectId);
                } else {
                    analyticsService.incrementTask(projectId);
                }

                analyticsService.calulateCompletionPercentage(projectId);

                return task1;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}

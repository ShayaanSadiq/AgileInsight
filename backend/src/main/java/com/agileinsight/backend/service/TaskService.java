package com.agileinsight.backend.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.Type;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.repository.SprintRepository;
import com.agileinsight.backend.repository.TaskRepository;

@Service
public class TaskService {
    
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private SprintRepository sprintRepository;

    @Autowired
    private AnalyticsService analyticsService;

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
    public void deleteTask(String id) {
        taskRepository.deleteById(id);
    }
}

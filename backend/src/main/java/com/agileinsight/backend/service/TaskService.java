package com.agileinsight.backend.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.dto.TaskUpdateDTO;
import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.Type;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.repository.SprintRepository;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.repository.UserRepository;

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

    @Autowired
    private UserRepository userRepository;

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
    
    public boolean updateTask(String taskId, TaskUpdateDTO taskUpdateDTO) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if(task != null) {
            if(taskUpdateDTO.getName() != null) {
                task.setName(taskUpdateDTO.getName());
            }
            if(taskUpdateDTO.getDescription() != null) {
                task.setDescription(taskUpdateDTO.getDescription());
            }
            if(taskUpdateDTO.getStartDate() != null && 
               task.getStartDate().isAfter(LocalDate.now().minusDays(1)) && task.getEndDate().isAfter(task.getStartDate())) {
                task.setStartDate(taskUpdateDTO.getStartDate());
            }
            if(taskUpdateDTO.getEndDate() != null && 
               task.getEndDate().isAfter(task.getStartDate())) {
                task.setEndDate(taskUpdateDTO.getEndDate());
            }
            if(taskUpdateDTO.getAssignedTo() != null && userRepository.existsById(taskUpdateDTO.getAssignedTo())) {
                task.setAssignedTo(taskUpdateDTO.getAssignedTo());
            }
            if(taskUpdateDTO.getPriority() != null) {
                task.setPriority(taskUpdateDTO.getPriority());
            }

            taskRepository.save(task);
            return true;
        } else {
            return false;
        }
    }
}

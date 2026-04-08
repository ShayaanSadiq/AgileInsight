package com.agileinsight.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Task;
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

    public Task createTask(Task task) {
        String projectId = task.getProjectId();
        String sprintId = task.getSprintId();

        if(projectRepository.existsById(projectId) && sprintRepository.existsById(sprintId)) {
            Task task1 = taskRepository.save(task);

            if(task1 != null) {
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

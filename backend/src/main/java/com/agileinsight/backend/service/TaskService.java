package com.agileinsight.backend.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.repository.TaskRepository;

@Service
public class TaskService {
    
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public Task createTask(Task task) {

        ObjectId objectId = new ObjectId(task.getProjectId());
        boolean exists = projectRepository.existsById(objectId);        

        if(!exists) {
            throw new RuntimeException("Project not found.");
        }

        return taskRepository.save(task);
    }
    public String deleteTask(String id) {
        ObjectId objectId = new ObjectId(id);
        taskRepository.deleteById(objectId);
        if(taskRepository.existsById(objectId)) {
            throw new RuntimeException("Task not deleted.");
        } else {
            System.out.println("Task deleted successfully");
        }
        return id;
    }
}

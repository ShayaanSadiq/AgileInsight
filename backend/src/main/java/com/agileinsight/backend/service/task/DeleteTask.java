package com.agileinsight.backend.service.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.repository.TaskRepository;

@Component
public class DeleteTask {
    
    @Autowired
    private TaskRepository taskRepository;
    
    public void deleteTask(String id) {
        taskRepository.deleteById(id);
    }
}

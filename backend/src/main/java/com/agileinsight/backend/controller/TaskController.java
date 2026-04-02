package com.agileinsight.backend.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.service.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/tasks")
public class TaskController {
    
    @Autowired
    private TaskService taskService;

    @Autowired
    private TaskRepository taskRepository;
    
    @PostMapping("/create")
    public Task createTask(@RequestBody @Valid Task task) {
        return taskService.createTask(task);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable String id) {
        ObjectId objectId = new ObjectId(id);
        
        taskService.deleteTask(id);

        if(taskRepository.existsById(objectId)) {
            throw new RuntimeException("Task not deleted.");
        } else {
        return ResponseEntity.ok(id);
        }
    }
}

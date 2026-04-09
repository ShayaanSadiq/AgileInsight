package com.agileinsight.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.dto.TaskUpdateDTO;
import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.service.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    
    @Autowired
    private TaskService taskService;

    @Autowired
    private TaskRepository taskRepository;
    
    @PostMapping("/create")
    public ResponseEntity<?> createTask(@RequestBody @Valid Task task) {
        Task createdTask = taskService.createTask(task);

        if(createdTask != null) {
            return ResponseEntity.ok(Map.of(
                "message", "Task created succesfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Task not created"
            ));
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable String id) {
        taskService.deleteTask(id);

        if(taskRepository.findById(id) != null) {
            return ResponseEntity.ok(Map.of(
                "message","Task deleted successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Task not deleted"
            ));
        }
    }

    @PatchMapping("/update/{taskId}")
    public ResponseEntity<?> updateTask(@PathVariable @Valid String taskId, @RequestBody @Valid TaskUpdateDTO taskUpdateDTO) {
        boolean updated = taskService.updateTask(taskId, taskUpdateDTO);

        if(updated) {
            return ResponseEntity.ok(Map.of(
                "message","Task updated successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Task not updated"
            ));
        }
    }
}

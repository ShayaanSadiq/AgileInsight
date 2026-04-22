package com.agileinsight.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.config.CustomUserDetails;
import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.dto.TaskUpdateDTO;
import com.agileinsight.backend.repository.ManagerRepository;
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

    @Autowired
    private ManagerRepository managerRepository;
    
    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/create")
    public ResponseEntity<?> createTask(@RequestBody @Valid Task task, @AuthenticationPrincipal CustomUserDetails user) {
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

    @PreAuthorize("hasRole('MANAGER')")
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

    @PreAuthorize("hasRole('MANAGER')")
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

    @PreAuthorize("hasAnyRole('MANAGER', 'ORGANISATION')")
    @GetMapping("/getTask/{taskId}")
    public ResponseEntity<?> getTask(@PathVariable @Valid String taskId, @AuthenticationPrincipal CustomUserDetails user) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if(task == null) {
            return ResponseEntity.ok(Map.of(
                "message","Invalid taskId"
            ));
        }

        boolean isManagerValid = taskRepository.findById(taskId).orElse(null).getProjectId().equals(user.getId());
        boolean isOrganisationValid = taskRepository.findById(taskId).orElse(null).getProjectId().equals(managerRepository.findById(user.getId()).orElse(null).getOrganisationId());

        if(!isManagerValid || !isOrganisationValid) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        return ResponseEntity.ok(task);
    }
}

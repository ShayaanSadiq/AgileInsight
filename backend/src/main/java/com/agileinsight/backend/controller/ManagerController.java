package com.agileinsight.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.service.ManagerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/managers")
@CrossOrigin(origins = "http://localhost:3000")
public class ManagerController {
    
    @Autowired
    private ManagerService managerService;

    @PostMapping("/login")
    public String login(@RequestBody @Valid Manager manager) {
        boolean isValid = managerService.loginManager(manager.getEmail(), manager.getPassword());

        if(isValid) {
            return "Login Successful";
        } else {
            return "Login failed.";
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid Manager manager) {
        try {
            Manager savedManager = managerService.registerManager(manager);
            return ResponseEntity.ok(savedManager);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public List<Manager> getAllUsers() {
        return managerService.getAllManagers();
    }
}


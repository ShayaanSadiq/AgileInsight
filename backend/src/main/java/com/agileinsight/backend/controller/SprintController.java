package com.agileinsight.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.service.SprintService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/sprints")
@CrossOrigin(origins = "http://localhost:3000")
public class SprintController {
    
    @Autowired
    private SprintService sprintService;

    @PostMapping("/create")
    public Sprint createSprint(@RequestBody @Valid Sprint sprint) {
        sprintService.createSprint(sprint);
        return sprint;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSprint(@PathVariable String id) {
        sprintService.deleteSprint(id);
    }
}

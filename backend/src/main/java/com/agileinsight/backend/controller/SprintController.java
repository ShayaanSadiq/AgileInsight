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

import com.agileinsight.backend.dto.SprintUpdateDTO;
import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.repository.SprintRepository;
import com.agileinsight.backend.service.SprintService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/sprints")
@CrossOrigin(origins = "http://localhost:5173")
public class SprintController {
    
    @Autowired
    private SprintService sprintService;

    @Autowired
    private SprintRepository sprintRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createSprint(@RequestBody @Valid Sprint sprint) {
        Sprint createdSprint = sprintService.createSprint(sprint);

        if(createdSprint != null) {
            return ResponseEntity.ok(Map.of(
                "message","Sprint created successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Sprint not created"
            ));
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSprint(@PathVariable String id) {
        sprintService.deleteSprint(id);

        if(sprintRepository.findById(id) != null) {
            return ResponseEntity.ok(Map.of(
                "message","Sprint deleted successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Sprint not deleted"
            ));
        }
    }

    @PatchMapping("/update/{sprintId}")
    public ResponseEntity<?> updateSprint(@PathVariable @Valid String sprintId, @RequestBody @Valid SprintUpdateDTO sprintUpdateDTO) {
        boolean updated = sprintService.updateSprint(sprintId, sprintUpdateDTO);

        if(updated) {
            return ResponseEntity.ok(Map.of(
                "message","Sprint updated successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Sprint not updated"
            ));
        }
    }
}

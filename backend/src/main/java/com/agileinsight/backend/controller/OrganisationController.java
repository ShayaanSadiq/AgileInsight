package com.agileinsight.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.service.OrganisationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/organisations")
@CrossOrigin(origins = "http://localhost:5173")
public class OrganisationController {
    
    @Autowired
    private OrganisationService organisationService;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody @Valid Organisation organisation) {
        boolean isValid = organisationService.loginOrganisation(organisation.getEmail(), organisation.getPassword());

        if(isValid) {
            return Map.of("message", "Login success");
        } else {
            return Map.of("error", "Login failed");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid Organisation organisation) {
        try {
            Organisation savedOrganisation = organisationService.registerOrganisation(organisation);
            return ResponseEntity.ok(savedOrganisation);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public List<Organisation> getAllOrganisation() {
        return organisationService.getAllOrganisations();
    }
}


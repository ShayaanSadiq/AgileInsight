package com.agileinsight.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.service.OrganisationService;
import com.agileinsight.backend.utility.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/organisations")
@CrossOrigin(origins = "http://localhost:5173")
public class OrganisationController {
    
    @Autowired
    private OrganisationService organisationService;

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid Organisation organisation, HttpServletResponse response) {
        boolean isValid = organisationService.loginOrganisation(organisation.getEmail(), organisation.getPassword());

        String id = (organisationRepository.findByEmail(organisation.getEmail())).getId();

        if(isValid) {
            String token = jwtUtil.generateToken(id); 
            
            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                                    .httpOnly(true)
                                    .secure(false)
                                    .path("/")
                                    .maxAge(1000 * 60 * 60)
                                    .sameSite("Lax")
                                    .build();
            
            return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(Map.of("message", "Login successful"));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Login failed"));
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

    // @GetMapping("/projects")
    // public void getAllProjects(@JwtToken) {

    //     JwtToken = exta
    //     return projectService.getAllProjects()
    // }
    
    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        ResponseCookie cookie = ResponseCookie.from("jwt", "")
                                .httpOnly(true)
                                .secure(false)
                                .path("/")
                                .maxAge(0)
                                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(Map.of("message", "Logout successful"));
    }
}


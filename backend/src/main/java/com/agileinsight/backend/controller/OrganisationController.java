package com.agileinsight.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.service.OrganisationService;
import com.agileinsight.backend.utility.JwtUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
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
    private ProjectRepository projectRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid Organisation organisation, HttpServletResponse response) {
        boolean isValid = organisationService.loginOrganisation(organisation.getEmail(), organisation.getPassword());

        String id = (organisationRepository.findByEmail(organisation.getEmail())).getId();

        if(isValid) {
            String token = jwtUtil.generateToken(organisation.getEmail(), id); 
            
            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                                    .httpOnly(true)
                                    .secure(false)
                                    .path("/")
                                    .maxAge(1000 * 60 * 60)
                                    .sameSite("Lax")
                                    .build();
            
            return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(Map.of("message", "Login successful", "id", id));
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

    @GetMapping("/verify")
    public ResponseEntity<?> verifyJwt(HttpServletRequest request) {
        String token = null;

        String id = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
                if("id".equals(cookie.getName())) {
                    id = cookie.getValue();
                }
            }
        }

        if (token == null) {
            return ResponseEntity.status(401).body("No token");
        }

        try {
            String username = jwtUtil.extractUsername(token);

            if (jwtUtil.validateToken(token, username) && organisationRepository.findById(id) != null) {
                return ResponseEntity.ok(Map.of(
                    "message", "Login successful",
                    "id", id
                ));
            }

        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid token");
        }

        return ResponseEntity.status(401).body("Invalid token");
    }
    
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

    @GetMapping("/projects/{orgId}")
    public ResponseEntity<?> getProjects(
            @PathVariable String orgId,
            HttpServletRequest request) {

        String token = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }

        if (token == null) {
            return ResponseEntity.status(401).body("No token");
        }

        String tokenId = jwtUtil.extractId(token);

        System.out.println("Path orgId: " + orgId);
        System.out.println("Token id: " + tokenId);

        if (!orgId.equals(tokenId)) {
            return ResponseEntity.status(403).body("Access denied");
        }

        List<Project> projects = projectRepository.findByOrganisationId(orgId);

        return ResponseEntity.ok(projects);
    }
}


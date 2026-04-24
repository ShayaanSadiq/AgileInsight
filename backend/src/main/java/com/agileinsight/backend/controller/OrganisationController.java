package com.agileinsight.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.config.CustomUserDetails;
import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.model.projection.OrganisationProjectionView;
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.service.OrganisationService;
import com.agileinsight.backend.service.ProjectService;
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
    private ProjectService projectService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private ManagerRepository managerRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid Organisation organisation, HttpServletResponse response) {
        Organisation organisation1 = organisationService.loginOrganisation(organisation.getEmail(), organisation.getPassword());

        if(organisation1 != null) {
            String id = organisation1.getId();
            String token = jwtUtil.generateToken(organisation1.getEmail(), id, "organisation");
            
            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                                    .httpOnly(true)
                                    .secure(false)
                                    .path("/")
                                    .maxAge(60 * 60 * 60)
                                    .sameSite("Lax")
                                    .build();
            
            return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(Map.of(
                    "message", "Login successful", 
                    "id", id
                )
            );
        } else {
            return ResponseEntity.ok(Map.of(
                    "message", "Login failed"
                )
            );
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid Organisation organisation) {
        if(organisation.getName() != null) {    
            try {
                organisationService.registerOrganisation(organisation);
                return ResponseEntity.ok()
                                    .body(Map.of("message","Register successful"));
            } catch (RuntimeException e) {
                return ResponseEntity.ok(Map.of(
                        "message", "Register failed"
                    )
                );
            }
        } else {
            return ResponseEntity.ok(Map.of(
                    "message", "Register failed"
                )
            );
        }
    }

    @PreAuthorize("hasRole('ORGANISATION')")
    @GetMapping("/verify")
    public ResponseEntity<?> verifyJwt(@AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid = organisationRepository.existsById(user.getId());

        if(!isValid) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        return ResponseEntity.ok(Map.of(
            "message", "Login successful",
            "id", user.getId()
        ));
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

    @PreAuthorize("hasRole('ORGANISATION')")
    @GetMapping("/projects")
    public ResponseEntity<?> getProjects(@AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid = organisationRepository.existsById(user.getId());

        if(!isValid) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        List<ProjectResponse> projects = projectService.getAllOrganisationProjects(user.getId());

        return ResponseEntity.ok(projects);
    }

    @PreAuthorize("hasRole('ORGANISATION')")
    @GetMapping("/project/{projectId}")
    public ResponseEntity<?> getProject(@PathVariable String projectId, @AuthenticationPrincipal CustomUserDetails user) {
        ProjectResponse projectResponse = projectService.getProject(projectId);

        if (!projectResponse.getOrganisationId().equals(user.getId())) {
            return ResponseEntity.ok(Map.of(
                "message","Project not found"
            ));
        }

        return ResponseEntity.ok(projectResponse);
    }

    @PreAuthorize("hasRole('ORGANISATION')")
    @GetMapping("/getallmanagers")
    public ResponseEntity<?> getAllManagers(@AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid = organisationRepository.existsById(user.getId());

        if(!isValid) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        ArrayList<Manager> managers = managerRepository.findByOrganisationId(user.getId());

        return ResponseEntity.ok(managers);
    }

    @PreAuthorize("hasRole('ORGANISATION')")
    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@AuthenticationPrincipal CustomUserDetails user) {
        OrganisationProjectionView organisationProjectionView = organisationRepository.findProjectedById(user.getId()).orElse(null);

        if(organisationProjectionView != null) {
            return ResponseEntity.ok(organisationProjectionView);
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Not found"
            ));
        }
    }

    @PreAuthorize("hasRole('ORGANISATION')")
    @PostMapping("/updateProfile")
    public ResponseEntity<?> updateProfile(@RequestBody Organisation organisation, @AuthenticationPrincipal CustomUserDetails user) {
        boolean updated = organisationService.updateProfile(organisation, user.getId());

        if(updated) {
            return ResponseEntity.ok(Map.of(
                "message","Organisation updated successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Organisation not updated"
            ));
        }
    }
}
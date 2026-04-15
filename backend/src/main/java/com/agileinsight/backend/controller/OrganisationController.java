package com.agileinsight.backend.controller;

import java.util.ArrayList;
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

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.model.projection.OrganisationProjectionView;
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.service.OrganisationService;
import com.agileinsight.backend.service.ProjectService;
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
            String token = jwtUtil.generateToken(organisation1.getEmail(), id);
            
            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                                    .httpOnly(true)
                                    .secure(false)
                                    .path("/")
                                    .maxAge(1000 * 60 * 60)
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

    @GetMapping("/verify")
    public ResponseEntity<?> verifyJwt(HttpServletRequest request) {
        String token = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }

        if (token == null) {
            return ResponseEntity.ok(Map.of(
                "message","Not logged in"
            ));
        }

        try {
            String username = jwtUtil.extractUsername(token);
            String id = jwtUtil.extractId(token);

            if (jwtUtil.validateToken(token, username) && organisationRepository.findById(id) != null) {
                return ResponseEntity.ok(Map.of(
                    "message", "Login successful",
                    "id", id
                ));
            }

        } catch (Exception e) {
            return ResponseEntity.ok(Map.of(
                "message","Invalid token"
            ));
        }

        return ResponseEntity.ok(Map.of(
                "message","Not logged in"
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
            return ResponseEntity.ok(Map.of(
                "message","Not logged in"
            ));
        }

        String tokenId = jwtUtil.extractId(token);

        if (!orgId.equals(tokenId)) {
            return ResponseEntity.ok(Map.of(
                "message","Incorrect organisation id"
            ));
        }

        List<ProjectResponse> projects = projectService.getAllOrganisationProjects(orgId);

        return ResponseEntity.ok(projects);
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<?> getProject(@PathVariable String projectId, HttpServletRequest request) {
        String token = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }

        if (token == null) {
            return ResponseEntity.ok(Map.of(
                "message","Not logged in"
            ));
        }

        ProjectResponse projectResponse = projectService.getProject(projectId);

        String tokenId = jwtUtil.extractId(token);

        if (!projectResponse.getOrganisationId().equals(tokenId)) {
            return ResponseEntity.ok(Map.of(
                "message","Project not found"
            ));
        }

        return ResponseEntity.ok(projectResponse);
    }

    @GetMapping("/getallmanagers/{organisationId}")
    public ResponseEntity<?> getAllManagers(@PathVariable @Valid String organisationId, HttpServletRequest request) {
        String token = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }

        if (token == null) {
            return ResponseEntity.ok(Map.of(
                "message","Not logged in"
            ));
        }
        
        ArrayList<Manager> managers = managerRepository.findByOrganisationId(organisationId);

        return ResponseEntity.ok(managers);
    }

    @GetMapping("/profile/{organisationId}")
    public ResponseEntity<?> getProfile(@PathVariable @Valid String organisationId, HttpServletRequest request) {
        String token = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }

        if (token == null) {
            return ResponseEntity.ok(Map.of(
                "message","Not logged in"
            ));
        }

        OrganisationProjectionView organisationProjectionView = organisationRepository.findProjectedById(organisationId).orElse(null);

        if(organisationProjectionView != null) {
            return ResponseEntity.ok(organisationProjectionView);
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Not found"
            ));
        }
    }
}
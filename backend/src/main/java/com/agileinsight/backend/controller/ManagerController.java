package com.agileinsight.backend.controller;

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
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.service.ManagerService;
import com.agileinsight.backend.service.ProjectService;
import com.agileinsight.backend.utility.JwtUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/managers")
@CrossOrigin(origins = "http://localhost:5173")
public class ManagerController {
    
    @Autowired
    private ManagerService managerService;

    @Autowired
    private ManagerRepository managerRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid Manager manager, HttpServletResponse response) {
        Manager manager1 = managerService.loginManager(manager.getEmail(), manager.getPassword());

        if(manager1 != null) {
            String id = manager1.getId();

            String token = jwtUtil.generateToken(manager1.getEmail(), id); 
            
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
            return ResponseEntity.ok(Map.of(
                "message","Login failed"
            ));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid Manager manager) {
        if(manager.getName() != null) {
            try {
                managerService.registerManager(manager);

                String id = (managerRepository.findByEmail(manager.getEmail())).getId();
                
                return ResponseEntity.ok()
                                    .body(Map.of(
                                        "message","Register successful",
                                        "id", id
                                    ));
            } catch (RuntimeException e) {
                return ResponseEntity.ok(Map.of(
                    "message","Register failed"
                ));
            }
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Register failed"
            ));
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

            if (jwtUtil.validateToken(token, username) && managerRepository.findById(id) != null) {
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

    @GetMapping("/projects/{managerId}")
    public ResponseEntity<?> getProjects(
            @PathVariable String managerId,
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

        if (!managerId.equals(tokenId)) {
            return ResponseEntity.ok(Map.of(
                "message","Incorrect organisation id"
            ));
        }

        List<ProjectResponse> projects = projectService.getAllManagerProjects(managerId);

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

        if (!projectResponse.getManagerId().equals(tokenId)) {
            return ResponseEntity.ok(Map.of(
                "message","Project not found"
            ));
        }

        return ResponseEntity.ok(projectResponse);
    }
}
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
import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.User;
import com.agileinsight.backend.model.projection.ManagerProjectionView;
import com.agileinsight.backend.model.response.ProjectResponse;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.ProjectRepository;
import com.agileinsight.backend.repository.SprintRepository;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.repository.UserRepository;
import com.agileinsight.backend.service.ManagerService;
import com.agileinsight.backend.service.ProjectService;
import com.agileinsight.backend.utility.JwtUtil;

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
    private SprintRepository sprintRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid Manager manager, HttpServletResponse response) {
        Manager manager1 = managerService.loginManager(manager.getEmail(), manager.getPassword());

        if(manager1 != null) {
            String id = manager1.getId();

            String token = jwtUtil.generateToken(manager1.getEmail(), id, "manager"); 
            
            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                                    .httpOnly(true)
                                    .secure(false)
                                    .path("/")
                                    .maxAge(60 * 60 * 60)
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

    @PreAuthorize("hasRole('MANAGER')")
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

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/verify")
    public ResponseEntity<?> verifyJwt(@AuthenticationPrincipal CustomUserDetails user) {
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

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/projects")
    public ResponseEntity<?> getProjects(@AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid = managerRepository.existsById(user.getId());

        if(!isValid) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        List<ProjectResponse> projects = projectService.getAllManagerProjects(user.getId());

        return ResponseEntity.ok(projects);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/project/{projectId}")
    public ResponseEntity<?> getProject(@PathVariable String projectId) {

        ProjectResponse projectResponse = projectService.getProject(projectId);

        return ResponseEntity.ok(projectResponse);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/sprints/{projectId}")
    public ResponseEntity<?> getAllSprints(@PathVariable @Valid String projectId) {
        ArrayList<Sprint> sprints = sprintRepository.findByProjectId(projectId);

        return ResponseEntity.ok(sprints);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/tasks/{sprintId}")
    public ResponseEntity<?> getAllTasks(@PathVariable @Valid String sprintId) {
        ArrayList<Task> tasks = taskRepository.findBySprintId(sprintId);

        return ResponseEntity.ok(tasks);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllManagers(@AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid = managerRepository.existsById(user.getId());

        if(!isValid) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        ArrayList<User> users = userRepository.findByOrganisationId(user.getId());

        return ResponseEntity.ok(users);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/getAllUsers/{projectId}")
    public ResponseEntity<?> getAllManagers(@PathVariable String projectId, @AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid1 = managerRepository.existsById(user.getId());
        boolean isValid2 = projectRepository.existsById(projectId);

        if(!isValid1 && !isValid2) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        ArrayList<User> users = userRepository.findByProjectId(user.getId());

        return ResponseEntity.ok(users);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@AuthenticationPrincipal CustomUserDetails user) {
        ManagerProjectionView managerProjectionView = managerRepository.findProjectedById(user.getId()).orElse(null);

        if(managerProjectionView != null) {
            return ResponseEntity.ok(managerProjectionView);
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Not found"
            ));
        }
    }
}
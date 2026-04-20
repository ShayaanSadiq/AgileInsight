package com.agileinsight.backend.controller;

import java.util.ArrayList;
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
import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.User;
import com.agileinsight.backend.model.defaultoptions.Status;
import com.agileinsight.backend.model.projection.UserProjectionView;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.repository.UserRepository;
import com.agileinsight.backend.service.UserService;
import com.agileinsight.backend.utility.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid User user, HttpServletResponse response) {
        User user1 = userService.loginUser(user.getEmail(), user.getPassword());

        if(user1 != null) {
            String id = user1.getId();
            String token = jwtUtil.generateToken(user1.getEmail(), id, "user"); 
            
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
    public ResponseEntity<?> register(@RequestBody @Valid User user, @AuthenticationPrincipal CustomUserDetails userDetails) {
        if(user.getName() != null) {
            try {
                userService.registerUser(user, userDetails.getUsername());
                return ResponseEntity.ok()
                                    .body(Map.of("message","Register successful"));
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

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/verify")
    public ResponseEntity<?> verifyJwt(@AuthenticationPrincipal CustomUserDetails user) {
        boolean isValid = userRepository.existsById(user.getId());

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

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@AuthenticationPrincipal CustomUserDetails user) {
        UserProjectionView userProjectionView = userRepository.findProjectedById(user.getId()).orElse(null);

        if(userProjectionView != null) {
            return ResponseEntity.ok(userProjectionView);
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Not found"
            ));
        }
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{taskId}/complete")
    public ResponseEntity<?> completeTask(@PathVariable String taskId, @AuthenticationPrincipal CustomUserDetails user) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if(task == null) {
            return ResponseEntity.ok(Map.of(
                "message","Task not found"
            ));
        }

        boolean checkIfUserTask = task.getAssignedTo().equals(user.getId());

        if(!checkIfUserTask) {
            return ResponseEntity.ok(Map.of(
                "message","Incorrect Task for User"
            ));
        }

        if(task.getStatus() == Status.COMPLETED) {
            return ResponseEntity.ok(Map.of(
                "message", "Task already completed"
            ));
        }

        task.setStatus(Status.COMPLETED);
        taskRepository.save(task);

        if(taskRepository.findById(taskId).orElse(null).getStatus() == Status.COMPLETED) {
            return ResponseEntity.ok(Map.of(
                "message","Task completed successfully"
            ));
        } else {
            return ResponseEntity.ok(Map.of(
                "message","Task not completed"
            ));
        }
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/getAllTasks")
    public ResponseEntity<?> getAllTasks(@AuthenticationPrincipal CustomUserDetails user) {
        User user1 = userRepository.findById(user.getId()).orElse(null);

        if(user1 == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        ArrayList<Task> tasks = taskRepository.findByAssignedTo(user1.getId());

        return ResponseEntity.ok(tasks);
    }

}

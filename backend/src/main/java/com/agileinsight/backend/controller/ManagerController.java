package com.agileinsight.backend.controller;

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

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.service.ManagerService;
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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid Manager manager, HttpServletResponse response) {
        boolean isValid = managerService.loginManager(manager.getEmail(), manager.getPassword());

        String id = (managerRepository.findByEmail(manager.getEmail())).getId();

        if(isValid) {
            String token = jwtUtil.generateToken(manager.getEmail(), id); 
            
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
    public ResponseEntity<?> register(@RequestBody @Valid Manager manager) {
        try {
            managerService.registerManager(manager);
            return ResponseEntity.ok()
                                 .body(Map.of("message","Register successful"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(Map.of("error", "Register failed"));
        }
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

            if (jwtUtil.validateToken(token, username) && managerRepository.findById(id) != null) {
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
}


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

import com.agileinsight.backend.model.User;
import com.agileinsight.backend.repository.UserRepository;
import com.agileinsight.backend.service.UserService;
import com.agileinsight.backend.utility.JwtUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
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
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid User user, HttpServletResponse response) {
        boolean isValid = userService.loginUser(user.getEmail(), user.getPassword());

        String id = (userRepository.findByEmail(user.getEmail())).getId();

        if(isValid) {
            String token = jwtUtil.generateToken(user.getEmail(), id); 
            
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
    public ResponseEntity<?> register(@RequestBody @Valid User user) {
        try {
            User savedUser = userService.registerUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
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

            if (jwtUtil.validateToken(token, username) && userRepository.findById(id) != null) {
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

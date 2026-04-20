package com.agileinsight.backend.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.User;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.UserRepository;

@Component
public class RegisterUser {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ManagerRepository managerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user, String managerEmail) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email already registered");
        }

        user.setManagerId(managerRepository.findByEmail(managerEmail).getId());

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}

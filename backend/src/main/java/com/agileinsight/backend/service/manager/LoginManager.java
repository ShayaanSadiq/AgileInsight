package com.agileinsight.backend.service.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.repository.ManagerRepository;

@Component
public class LoginManager {
    
    @Autowired
    private ManagerRepository managerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Manager loginManager(String email, String rawPassword) {
        Manager manager = managerRepository.findByEmail(email);
        
        if (manager != null && passwordEncoder.matches(rawPassword, manager.getPassword())) {
            return manager;
        }
        return null;
    }
}

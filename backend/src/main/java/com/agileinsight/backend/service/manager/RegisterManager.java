package com.agileinsight.backend.service.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.repository.ManagerRepository;

@Component
public class RegisterManager {
    
    @Autowired
    private ManagerRepository managerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Manager registerManager(Manager manager) {
        if (managerRepository.findByEmail(manager.getEmail()) != null) {
            throw new RuntimeException("Email already registered");
        }

        manager.setPassword(passwordEncoder.encode(manager.getPassword()));
        return managerRepository.save(manager);
    }
}

package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.repository.ManagerRepository;

@Service
public class ManagerService{

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
    
    public boolean loginManager(String email, String rawPassword) {
        Manager manager = managerRepository.findByEmail(email);

        if (manager != null && passwordEncoder.matches(rawPassword, manager.getPassword())) {
            return true;
        }
        return false;
    }

    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }
    
}

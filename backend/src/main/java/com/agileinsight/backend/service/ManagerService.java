package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.service.manager.LoginManager;
import com.agileinsight.backend.service.manager.RegisterManager;

@Service
public class ManagerService{

    @Autowired
    private RegisterManager registerManager;

    @Autowired
    private LoginManager loginManager;

    @Autowired
    private ManagerRepository managerRepository;

    public Manager registerManager(Manager manager) {
        return registerManager.registerManager(manager);
    }
    
    public Manager loginManager(String email, String rawPassword) {
        return loginManager.loginManager(email, rawPassword);
    }

    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }  
}

package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.User;
import com.agileinsight.backend.repository.UserRepository;
import com.agileinsight.backend.service.user.LoginUser;
import com.agileinsight.backend.service.user.RegisterUser;

@Service
public class UserService{

    @Autowired
    private RegisterUser registerUser;

    @Autowired
    private LoginUser loginUser;

    @Autowired
    private UserRepository userRepository;


    public User registerUser(User user) {
        return registerUser.registerUser(user);
    }
    
    public User loginUser(String email, String rawPassword) {
        return loginUser.loginUser(email, rawPassword);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
}

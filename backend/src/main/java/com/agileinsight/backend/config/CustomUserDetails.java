package com.agileinsight.backend.config;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CustomUserDetails {
    
    private String id;
    private String username;
    private String role;
}

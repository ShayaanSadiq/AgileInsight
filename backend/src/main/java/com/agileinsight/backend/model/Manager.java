package com.agileinsight.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "managers")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Manager {
    
    @Id
    private String id;

    private String name;

    @Indexed(unique = true)
    @NotBlank(message = "Email is required") 
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required") 
    private String password;

    private String organisationId;
}
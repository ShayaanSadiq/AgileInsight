package com.agileinsight.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "tasks")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Task {
    
    @Id
    private String id;

    @NotBlank(message = "Name is required") 
    private String name;

    @NotBlank(message = "Password is required") 
    private String description;

    @NotBlank(message = "Password is required") 
    private String projectId;
}

package com.agileinsight.backend.model;

import java.time.LocalDate;

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

    // private Enum type; (bug, feature, improvement)

    @NotBlank(message = "StartDate is required")
    private LocalDate startDate;

    @NotBlank(message = "EndDate is required")
    private LocalDate endDate;

    @NotBlank(message = "AssignedTo is required")
    private String assignedTo;

    @NotBlank(message = "AssignedBy is required")
    private String assignedBy;

    @NotBlank(message = "ProjectId is required") 
    private String projectId;
}

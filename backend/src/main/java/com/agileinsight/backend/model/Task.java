package com.agileinsight.backend.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    @JsonFormat(pattern = "dd-MM-yyyy")
    @NotNull
    private LocalDate startDate;

    @JsonFormat(pattern = "dd-MM-yyyy")
    @NotNull
    private LocalDate endDate;

    @NotBlank(message = "AssignedTo is required")
    private String assignedTo;

    @NotBlank(message = "ManagerId is required")
    private String managerId;

    @NotBlank(message = "ProjectId is required") 
    private String projectId;

    @NotBlank(message = "SprintId is required")
    private String sprintId;
}

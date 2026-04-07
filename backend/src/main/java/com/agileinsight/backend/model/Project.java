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

@Document(collection = "projects")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Project {
    
    @Id
    private String id;

    @NotBlank(message = "Name is required") 
    private String name;

    @NotBlank(message = "Password is required") 
    private String description;

    // Implement in analytics
    // private Integer totalSprints;

    private Integer currentSprintNumber;

    private String currentSprintId;

    @JsonFormat(pattern = "dd-MM-yyyy")
    @NotNull
    private LocalDate startDate;

    @JsonFormat(pattern = "dd-MM-yyyy")
    @NotNull
    private LocalDate endDate;

    @NotBlank(message = "ManagerId is required")
    private String managerId;

    @NotBlank(message = "OrganisationId is required")
    private String organisationId;

    @NotNull
    private Integer expectedSprints;

    // private Enum status;
}

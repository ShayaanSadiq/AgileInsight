package com.agileinsight.backend.model;

import java.time.LocalDate;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
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
    private ObjectId id;

    @NotBlank(message = "Name is required") 
    private String name;

    @NotBlank(message = "Password is required") 
    private String description;

    // Implement in analytics
    // private Integer totalSprints;

    private Integer currentSprintNumber;

    private String currentSprintId;

    @NotBlank(message = "StartDate is required")
    private LocalDate startDate;

    @NotBlank(message = "EndDate is required")
    private LocalDate endDate;

    @NotBlank(message = "ManagerId is required")
    private String managerId;

    @NotBlank(message = "OrganisationId is required")
    private String organisationId;

    @NotBlank(message = "ExpectedSprints is required")
    private Integer expectedSprints;

    // private Enum status;
}

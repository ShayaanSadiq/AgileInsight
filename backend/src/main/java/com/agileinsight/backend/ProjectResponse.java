package com.agileinsight.backend;

import java.time.LocalDate;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.Status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProjectResponse {
    
    private String id;

    private String name;

    private String description;

    // Implement in analytics
    // private Integer totalSprints;

    private Integer currentSprintNumber;

    private String currentSprintId;

    private LocalDate startDate;

    private LocalDate endDate;

    private String managerId;

    private Manager manager;

    private String organisationId;

    private Integer expectedSprints;

    private Status status;

    public ProjectResponse(String id, String name, String description, Integer currentSprintNumber,
            String currentSprintId, LocalDate startDate, LocalDate endDate, Manager manager, String organisationId,
            Integer expectedSprints, Status status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.currentSprintNumber = currentSprintNumber;
        this.currentSprintId = currentSprintId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.manager = manager;
        this.organisationId = organisationId;
        this.expectedSprints = expectedSprints;
        this.status = status;
    }
}

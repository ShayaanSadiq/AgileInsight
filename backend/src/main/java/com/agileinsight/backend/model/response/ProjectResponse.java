package com.agileinsight.backend.model.response;

import java.time.LocalDate;

import com.agileinsight.backend.model.Manager;
import com.agileinsight.backend.model.defaultoptions.Status;

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

    private Manager manager;

    private String organisationId;

    private Integer expectedSprints;

    private Status status;
}

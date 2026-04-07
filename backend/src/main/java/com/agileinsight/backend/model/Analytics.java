package com.agileinsight.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "analytics")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Analytics {

    @Id
    private String id;

    private Integer totalTasks;

    private Integer completedTasks;

    private Integer totalSprints;

    private Integer completedSprints;

    // Duplicate in Project Model
    // private Integer expectedSprints;

    private Integer totalBugs;

    private Integer resolvedBugs;

    private String sprintId;

    private String projectId;
}

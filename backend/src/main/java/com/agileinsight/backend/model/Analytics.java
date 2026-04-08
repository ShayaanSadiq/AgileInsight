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

    private long totalTasks;

    private long completedTasks;

    private long totalSprints;

    private long completedSprints;

    private long totalBugs;

    private long resolvedBugs;

    private String projectId;

    private long expectedSprints;

    private double completionPercentage;
}

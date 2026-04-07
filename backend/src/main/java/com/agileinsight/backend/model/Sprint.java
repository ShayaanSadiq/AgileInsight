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

@Document(collection="sprints")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Sprint {
    
    @Id
    private ObjectId id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Description is required")
    private String description;

    @NotBlank(message = "StartDate is required")
    private LocalDate startDate;

    @NotBlank(message = "EndDate is required")
    private LocalDate endDate;

    @NotBlank(message = "ProjectId is required")
    private String projectId;

    // private Integer totalTasks;
}

package com.agileinsight.backend.model;

import java.time.LocalDate;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    @JsonFormat(pattern = "dd-MM-yyyy")
    @NotNull
    private LocalDate startDate;

    @JsonFormat(pattern = "dd-MM-yyyy")
    @NotNull
    private LocalDate endDate;

    @NotBlank(message = "ProjectId is required")
    private String projectId;

    // private Integer totalTasks;
}

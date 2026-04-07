package com.agileinsight.backend.model;

import java.sql.Date;

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

    private String organisationId;

    private Date dueDate;
}

package com.agileinsight.backend.dto;

import java.time.LocalDate;

import com.agileinsight.backend.model.Priority;
import com.agileinsight.backend.model.Type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TaskUpdateDTO {
    
    private String name;
    private String description;
    private Type type;
    private LocalDate startDate;
    private LocalDate endDate;
    private String assignedTo;
    private Priority priority;
}

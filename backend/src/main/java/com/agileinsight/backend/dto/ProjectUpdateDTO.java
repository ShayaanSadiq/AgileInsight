package com.agileinsight.backend.dto;

import java.time.LocalDate;

import com.agileinsight.backend.model.Priority;

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
public class ProjectUpdateDTO {
    private String name;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private String managerId;
    private Priority priority;
}

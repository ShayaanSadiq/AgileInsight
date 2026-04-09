package com.agileinsight.backend.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectUpdateDTO {
    private String name;
    private String description;
    private LocalDate startDate;
    private String managerId;
}

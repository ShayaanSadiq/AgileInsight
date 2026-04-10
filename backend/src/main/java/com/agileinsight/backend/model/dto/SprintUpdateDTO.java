package com.agileinsight.backend.model.dto;

import java.time.LocalDate;

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
public class SprintUpdateDTO {
    
    private String name;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
}

package com.agileinsight.backend.service.sprint;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.model.dto.SprintUpdateDTO;
import com.agileinsight.backend.repository.SprintRepository;

@Component
public class UpdateSprint {

    @Autowired
    private SprintRepository sprintRepository;

    public boolean updateSprint(String sprintId, SprintUpdateDTO sprintUpdateDTO) {
        Sprint sprint = sprintRepository.findById(sprintId).orElse(null);

        if(sprint != null) {
            if(sprintUpdateDTO.getName() != null) {
                sprint.setName(sprintUpdateDTO.getName());
            }
            if(sprintUpdateDTO.getDescription() != null) {
                sprint.setDescription(sprintUpdateDTO.getDescription());
            }
            if(sprintUpdateDTO.getStartDate() != null && 
               sprint.getStartDate().isAfter(LocalDate.now().minusDays(1)) && sprint.getEndDate().isAfter(sprint.getStartDate())) {
                sprint.setStartDate(sprintUpdateDTO.getStartDate());
            }
            if(sprintUpdateDTO.getEndDate() != null && 
               sprint.getEndDate().isAfter(sprint.getStartDate())) {
                sprint.setEndDate(sprintUpdateDTO.getEndDate());
            }
            sprintRepository.save(sprint);
            return true;
        } else {
            return false;
        }
    }
}

package com.agileinsight.backend.service.sprint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.repository.SprintRepository;

@Component
public class DeleteSprint {
    
    @Autowired
    private SprintRepository sprintRepository;

    public void deleteSprint(String id) {
        sprintRepository.deleteById(id);
    }
}

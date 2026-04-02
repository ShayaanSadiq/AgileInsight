package com.agileinsight.backend.service.sprint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.repository.SprintRepository;

@Component
public class CreateSprint {
    
    @Autowired
    private SprintRepository sprintRepository;

    public Sprint createSprint(Sprint sprint) {
        sprintRepository.save(sprint);
        return sprint;
    }
}

package com.agileinsight.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.service.sprint.CreateSprint;
import com.agileinsight.backend.service.sprint.DeleteSprint;

@Service
public class SprintService {
    
    @Autowired
    private CreateSprint create;

    @Autowired
    private DeleteSprint delete;

    public Sprint createSprint(Sprint sprint) {
        create.createSprint(sprint);
        return sprint;
    }

    public String deleteSprint(String id) {
        delete.deleteSprint(id);
        return id;
    }
}

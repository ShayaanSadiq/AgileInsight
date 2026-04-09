package com.agileinsight.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.dto.SprintUpdateDTO;
import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.service.sprint.CreateSprint;
import com.agileinsight.backend.service.sprint.DeleteSprint;
import com.agileinsight.backend.service.sprint.UpdateSprint;

@Service
public class SprintService {
    
    @Autowired
    private CreateSprint create;

    @Autowired
    private DeleteSprint delete;

    @Autowired
    private UpdateSprint update;

    public Sprint createSprint(Sprint sprint) {
        return create.createSprint(sprint);
    }

    public void deleteSprint(String id) {
        delete.deleteSprint(id);
    }

    public boolean updateSprint(String sprintId, SprintUpdateDTO sprintUpdateDTO) {
        return update.updateSprint(sprintId, sprintUpdateDTO);
    }
}

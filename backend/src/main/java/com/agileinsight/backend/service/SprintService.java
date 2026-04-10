package com.agileinsight.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Sprint;
import com.agileinsight.backend.model.dto.SprintUpdateDTO;
import com.agileinsight.backend.service.sprint.CreateSprint;
import com.agileinsight.backend.service.sprint.DeleteSprint;
import com.agileinsight.backend.service.sprint.UpdateSprint;

@Service
public class SprintService {
    
    @Autowired
    private CreateSprint createSprint;

    @Autowired
    private DeleteSprint deleteSprint;

    @Autowired
    private UpdateSprint updateSprint;

    public Sprint createSprint(Sprint sprint) {
        return createSprint.createSprint(sprint);
    }

    public void deleteSprint(String id) {
        deleteSprint.deleteSprint(id);
    }

    public boolean updateSprint(String sprintId, SprintUpdateDTO sprintUpdateDTO) {
        return updateSprint.updateSprint(sprintId, sprintUpdateDTO);
    }
}

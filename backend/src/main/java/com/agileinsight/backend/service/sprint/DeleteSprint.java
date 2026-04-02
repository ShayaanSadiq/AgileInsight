package com.agileinsight.backend.service.sprint;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.repository.SprintRepository;

@Component
public class DeleteSprint {
    
    @Autowired
    private SprintRepository sprintRepository;

    public void deleteSprint(String id) {
        ObjectId objectId = new ObjectId(id);
        
        sprintRepository.deleteById(objectId);

        if(sprintRepository.existsById(objectId)) {
            throw new RuntimeException("Sprint not deleted");
        } else {
            System.out.println("Project deleted successfully");
        }
    }
}

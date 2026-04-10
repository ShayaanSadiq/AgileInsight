package com.agileinsight.backend.service.task;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.dto.TaskUpdateDTO;
import com.agileinsight.backend.repository.TaskRepository;
import com.agileinsight.backend.repository.UserRepository;

@Component
public class UpdateTask {
    
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;
    
    public boolean updateTask(String taskId, TaskUpdateDTO taskUpdateDTO) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if(task != null) {
            if(taskUpdateDTO.getName() != null) {
                task.setName(taskUpdateDTO.getName());
            }
            if(taskUpdateDTO.getDescription() != null) {
                task.setDescription(taskUpdateDTO.getDescription());
            }
            if(taskUpdateDTO.getStartDate() != null && 
               task.getStartDate().isAfter(LocalDate.now().minusDays(1)) && task.getEndDate().isAfter(task.getStartDate())) {
                task.setStartDate(taskUpdateDTO.getStartDate());
            }
            if(taskUpdateDTO.getEndDate() != null && 
               task.getEndDate().isAfter(task.getStartDate())) {
                task.setEndDate(taskUpdateDTO.getEndDate());
            }
            if(taskUpdateDTO.getAssignedTo() != null && userRepository.existsById(taskUpdateDTO.getAssignedTo())) {
                task.setAssignedTo(taskUpdateDTO.getAssignedTo());
            }
            if(taskUpdateDTO.getPriority() != null) {
                task.setPriority(taskUpdateDTO.getPriority());
            }

            taskRepository.save(task);
            return true;
        } else {
            return false;
        }
    }
}

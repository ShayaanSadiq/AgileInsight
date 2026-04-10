package com.agileinsight.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Task;
import com.agileinsight.backend.model.dto.TaskUpdateDTO;
import com.agileinsight.backend.service.task.CreateTask;
import com.agileinsight.backend.service.task.DeleteTask;
import com.agileinsight.backend.service.task.UpdateTask;

@Service
public class TaskService {
    
    @Autowired
    private CreateTask createTask;

    @Autowired
    private DeleteTask deleteTask;

    @Autowired
    private UpdateTask updateTask;

    public Task createTask(Task task) {
        return createTask.createTask(task);
    }

    public void deleteTask(String id) {
        deleteTask.deleteTask(id);
    }
    
    public boolean updateTask(String taskId, TaskUpdateDTO taskUpdateDTO) {
        return updateTask.updateTask(taskId, taskUpdateDTO);
    }
}

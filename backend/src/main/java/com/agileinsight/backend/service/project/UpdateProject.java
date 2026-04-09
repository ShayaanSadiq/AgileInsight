package com.agileinsight.backend.service.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.dto.ProjectUpdateDTO;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class UpdateProject {
    
    @Autowired
    private ProjectRepository projectRepository;

    public boolean updateProject(String projectId, ProjectUpdateDTO projectUpdateDTO) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if(project != null) {
            if(projectUpdateDTO.getName() != null) {
                project.setName(projectUpdateDTO.getName());
            }
            if(projectUpdateDTO.getDescription() != null) {
                project.setDescription(projectUpdateDTO.getDescription());
            }
            if(projectUpdateDTO.getStartDate() != null) {
                project.setStartDate(projectUpdateDTO.getStartDate());
            }
            if(projectUpdateDTO.getManagerId() != null) {
                project.setManagerId(projectUpdateDTO.getManagerId());
            }

            projectRepository.save(project);
            return true;
        } else {
            return false;
        }
    }
}

package com.agileinsight.backend.service.project;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.dto.ProjectUpdateDTO;
import com.agileinsight.backend.model.Project;
import com.agileinsight.backend.repository.ManagerRepository;
import com.agileinsight.backend.repository.ProjectRepository;

@Component
public class UpdateProject {
    
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ManagerRepository managerRepository;

    public boolean updateProject(String projectId, ProjectUpdateDTO projectUpdateDTO) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if(project != null) {
            if(projectUpdateDTO.getName() != null && project.getName() != projectUpdateDTO.getName()) {
                project.setName(projectUpdateDTO.getName());
            }
            if(projectUpdateDTO.getDescription() != null && project.getDescription() != projectUpdateDTO.getDescription()) {
                project.setDescription(projectUpdateDTO.getDescription());
            }
            if(projectUpdateDTO.getStartDate() != null && 
               !(project.getStartDate() == projectUpdateDTO.getStartDate()) && 
               project.getStartDate().isAfter(LocalDate.now().minusDays(1)) && project.getEndDate().isAfter(project.getStartDate())) {
                project.setStartDate(projectUpdateDTO.getStartDate());
            }
            if(projectUpdateDTO.getManagerId() != null && project.getManagerId() != projectUpdateDTO.getManagerId() && 
               managerRepository.existsById(projectUpdateDTO.getManagerId())) {
                project.setManagerId(projectUpdateDTO.getManagerId());
            }

            projectRepository.save(project);
            return true;
        } else {
            return false;
        }
    }
}

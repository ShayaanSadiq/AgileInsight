package com.agileinsight.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agileinsight.backend.model.Analytics;
import com.agileinsight.backend.repository.AnalyticsRepository;

@RestController
@CrossOrigin(origins = "localhost:5173")
@RequestMapping("/api/analytics")
public class AnalyticsController {

    @Autowired
    private AnalyticsRepository analyticsRepository;

    @GetMapping("/{projectId}")
    public Analytics analyticsOfProject(@PathVariable String projectId)  {
        // analytics.setTotalTasks(taskRepository.countByProjectId(projectId));

        // analytics.setCompletedTasks(taskRepository.countByProjectIdAndStatus(projectId, Status.COMPLETED));

        // analytics.setTotalSprints(sprintRepository.countByProjectId(projectId));

        // analytics.setCompletedSprints(sprintRepository.countByProjectIdAndStatus(projectId, Status.COMPLETED));

        // analytics.setTotalBugs(taskRepository.countByProjectIdAndType(projectId, Type.BUG));

        // analytics.setResolvedBugs(taskRepository.countByProjectIdAndStatusAndType(projectId, Status.COMPLETED, Type.BUG));

        // analytics.setProjectId(projectId);

        return analyticsRepository.findByProjectId(projectId);
    }
}

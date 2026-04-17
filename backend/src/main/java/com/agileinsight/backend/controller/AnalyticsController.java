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
        return analyticsRepository.findByProjectId(projectId);
    }
}

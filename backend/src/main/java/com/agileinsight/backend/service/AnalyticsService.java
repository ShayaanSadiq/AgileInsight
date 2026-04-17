// PLEASE REFACTOR THE CODE 🤬

package com.agileinsight.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Analytics;
import com.agileinsight.backend.repository.AnalyticsRepository;

@Service
public class AnalyticsService {
    
    @Autowired
    private AnalyticsRepository analyticsRepository;

    public void createAnalytics(String projectId, long expectedSprints) {
        Analytics analytics = new Analytics();

        analytics.setTotalSprints(0);
        analytics.setCompletedSprints(0);
        analytics.setTotalTasks(0);
        analytics.setCompletedTasks(0);
        analytics.setTotalBugs(0);
        analytics.setResolvedBugs(0);
        analytics.setExpectedSprints(expectedSprints);
        analytics.setCompletionPercentage(0);
        analytics.setProjectId(projectId);

        analyticsRepository.save(analytics);
    }

    public void createAnalytics(String projectId) {
        Analytics analytics = new Analytics();

        analytics.setTotalSprints(0);
        analytics.setCompletedSprints(0);
        analytics.setTotalTasks(0);
        analytics.setCompletedTasks(0);
        analytics.setTotalBugs(0);
        analytics.setResolvedBugs(0);
        analytics.setExpectedSprints(0);
        analytics.setCompletionPercentage(0);
        analytics.setProjectId(projectId);

        analyticsRepository.save(analytics);
    }

    public void incrementTask(String projectId) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return;
        }

        analytics.setTotalTasks(analytics.getTotalTasks() + 1);
        analyticsRepository.save(analytics);
    }

    public void incrementSprint(String projectId) {

        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return; 
        }

        analytics.setTotalSprints(analytics.getTotalSprints() + 1);
        analyticsRepository.save(analytics); 
    }

    public void incrementBug(String projectId) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return;
        }

        analytics.setTotalBugs(analytics.getTotalBugs() + 1);
        analytics.setTotalTasks(analytics.getTotalTasks() + 1);
        analyticsRepository.save(analytics);
    }

    public void incrementResolvedBug(String projectId) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return;
        }

        analytics.setResolvedBugs(analytics.getResolvedBugs() + 1);
        analyticsRepository.save(analytics);
    }

    public void incrementCompletedSprint(String projectId) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return;
        }

        analytics.setCompletedSprints(analytics.getCompletedSprints() + 1);
        analyticsRepository.save(analytics);
    }

    public void incrementCompletedTask(String projectId) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return;
        }

        analytics.setCompletedTasks(analytics.getCompletedTasks() + 1);
        analyticsRepository.save(analytics);
    }

    public void setTotalTasks(String projectId, long totalTasks) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        if(analytics == null) {
            return;
        }

        analytics.setTotalTasks(totalTasks);
        analyticsRepository.save(analytics);
    }

    public void deleteAnalytics(String projectId) {
        analyticsRepository.delete(analyticsRepository.findByProjectId(projectId));
    }

    public void calulateCompletionPercentage(String projectId) {
        Analytics analytics = analyticsRepository.findByProjectId(projectId);

        double completionPercentage;

        if(analytics == null) {
            return;
        }
        if(analytics.getCompletedTasks() == 0) {
            completionPercentage = 0;
        } else {
            completionPercentage = ((double) analytics.getCompletedTasks() / (double) analytics.getTotalTasks()) * 100;
        }

        analytics.setCompletionPercentage(completionPercentage);
        analyticsRepository.save(analytics);
    }
}
package com.agileinsight.backend.service.organisation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.repository.OrganisationRepository;

@Component
public class UpdateOrganisation {
    
    @Autowired
    private OrganisationRepository organisationRepository;

    public boolean updateProfile(Organisation organisation, String organisationId) {
        Organisation organisation1 = organisationRepository.findById(organisationId).orElse(null);

        organisation1.setName(organisation.getName());
        organisation1.setEmail(organisation.getEmail());
        organisation1.setPassword(organisation.getPassword());

        return organisationRepository.save(organisation1) != null;
    }
}

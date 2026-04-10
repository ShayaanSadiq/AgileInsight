package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.repository.OrganisationRepository;
import com.agileinsight.backend.service.organisation.LoginOrganisation;
import com.agileinsight.backend.service.organisation.RegisterOrganisation;

@Service
public class OrganisationService{

    @Autowired
    private RegisterOrganisation registerOrganisation;

    @Autowired
    private LoginOrganisation loginOrganisation;

    @Autowired
    private OrganisationRepository organisationRepository;

    public Organisation registerOrganisation(Organisation organisation) {
        return registerOrganisation.registerOrganisation(organisation);
    }
    
    public Organisation loginOrganisation(String email, String rawPassword) {
        return loginOrganisation.loginOrganisation(email, rawPassword);
    }

    public List<Organisation> getAllOrganisations() {
        return organisationRepository.findAll();
    }
}

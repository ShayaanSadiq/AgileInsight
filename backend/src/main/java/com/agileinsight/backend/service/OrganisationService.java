package com.agileinsight.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.repository.OrganisationRepository;

@Service
public class OrganisationService{

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Organisation registerOrganisation(Organisation organisation) {
        if (organisationRepository.findByEmail(organisation.getEmail()) != null) {
            throw new RuntimeException("Email already registered");
        }

        organisation.setPassword(passwordEncoder.encode(organisation.getPassword()));
        return organisationRepository.save(organisation);
    }
    
    public Organisation loginOrganisation(String email, String rawPassword) {
        Organisation organisation = organisationRepository.findByEmail(email);

        if (organisation != null && passwordEncoder.matches(rawPassword, organisation.getPassword())) {
            return organisation;
        }
        return null;
    }

    public List<Organisation> getAllOrganisations() {
        return organisationRepository.findAll();
    }
}

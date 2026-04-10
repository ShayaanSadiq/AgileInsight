package com.agileinsight.backend.service.organisation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.repository.OrganisationRepository;

@Component
public class RegisterOrganisation {
    
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
}

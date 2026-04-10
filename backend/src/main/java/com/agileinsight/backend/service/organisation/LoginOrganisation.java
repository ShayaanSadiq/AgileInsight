package com.agileinsight.backend.service.organisation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.repository.OrganisationRepository;

@Component
public class LoginOrganisation {
    
    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Organisation loginOrganisation(String email, String rawPassword) {
        Organisation organisation = organisationRepository.findByEmail(email);

        if (organisation != null && passwordEncoder.matches(rawPassword, organisation.getPassword())) {
            return organisation;
        }
        return null;
    }
}

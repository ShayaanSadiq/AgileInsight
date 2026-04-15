package com.agileinsight.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.Organisation;
import com.agileinsight.backend.model.projection.OrganisationProjectionView;
import com.mongodb.lang.Nullable;

public interface OrganisationRepository extends MongoRepository<Organisation, String>{
    
    @Nullable 
    Organisation findByEmail(String email);

    Optional<OrganisationProjectionView> findProjectedById(String organisationId);
}

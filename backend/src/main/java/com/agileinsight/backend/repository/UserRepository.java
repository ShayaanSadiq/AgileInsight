package com.agileinsight.backend.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.jspecify.annotations.Nullable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.User;
import com.agileinsight.backend.model.projection.UserProjectionView;

public interface UserRepository extends MongoRepository<User, String> {

  @Nullable 
  User findByEmail(String email);

  Optional<UserProjectionView> findProjectedById(String userId);

  ArrayList<User> findByManagerId(String id);

  ArrayList<User> findByProjectId(String id);
}
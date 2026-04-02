package com.agileinsight.backend.repository;

import org.jspecify.annotations.Nullable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.agileinsight.backend.model.User;

public interface UserRepository extends MongoRepository<User, String> {

  @Nullable 
  User findByEmail(String email);

}
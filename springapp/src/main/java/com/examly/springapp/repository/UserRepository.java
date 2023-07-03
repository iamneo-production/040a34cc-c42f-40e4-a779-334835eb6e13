<<<<<<< HEAD
package com.examly.springapp.repository;


import com.examly.springapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    Optional<User> findById(Long id);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
=======
package main.java.com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.java.com.examly.springapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	User findByUserId(long id);
	
>>>>>>> Education-loan-portal-karthi-0212

}

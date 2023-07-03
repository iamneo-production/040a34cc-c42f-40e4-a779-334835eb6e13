package com.examly.springapp.Repository;

import com.examly.springapp.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


     Optional<User> findByUsernameOrEmail(String username, String email);
     Optional<User> findByUsername(String username);
     Optional<User> findById(Long id);
     Boolean existsByUsername(String username);
     Boolean existsByEmail(String email);

     Optional<User> findByEmail(String email);

}

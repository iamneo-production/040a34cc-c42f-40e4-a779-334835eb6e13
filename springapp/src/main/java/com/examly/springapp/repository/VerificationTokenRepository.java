package com.examly.springapp.repository;

import com.examly.springapp.model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;



public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
    VerificationToken findByToken(String token);
}

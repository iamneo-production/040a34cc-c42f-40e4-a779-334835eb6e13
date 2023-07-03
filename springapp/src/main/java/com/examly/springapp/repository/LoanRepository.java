package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Loan;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {
	
	List<LoanApplication> findByUserId(Long userId);
	List<LoanApplication> findByStatus(String status);
	Optional<LoanApplication> findByUserIdAndId(Long userId, Long id);
	
}

package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.project.loanPortalMain.model.LoanApplication2;

@Repository
public interface LoanApplication2Repository extends JpaRepository<LoanApplication2, Long> {
	
	List<LoanApplication2> findByUserId(Long userId);
	Optional<LoanApplication2> findByUserIdAndId(Long userId, Long id);
	
}


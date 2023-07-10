package com.examly.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.loanPortalMain.model.LoanApplication3;

@Repository
public interface LoanApplication3Repository extends JpaRepository<LoanApplication3, Long>{
	
    Optional<LoanApplication3> findByTenthMarksheetFileName(String name);
	
	Optional<LoanApplication3> findByUserId(Long userId);
	
	Optional<LoanApplication3> findByUserIdAndId(Long userId, Long id);

}


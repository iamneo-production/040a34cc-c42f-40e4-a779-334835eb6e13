package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.educationloan.PortalBackend.entity.LoanApplication;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {

	List<LoanApplication> findByUserId(Long userId);

	List<LoanApplication> findByStatus(String status);

	Optional<LoanApplication> findByUserIdAndId(Long userId, Long id);
	
	@Query("SELECT t1 FROM LoanApplication t1 INNER JOIN LoanApplication3 t2 ON t1.userId=t2.userId")
	List<LoanApplication> findAllByUserId();

}

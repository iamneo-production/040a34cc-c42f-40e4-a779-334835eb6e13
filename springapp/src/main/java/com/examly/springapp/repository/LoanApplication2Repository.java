package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.LoanApplication2;

@Repository
public interface LoanApplication2Repository extends JpaRepository<LoanApplication2, Long> {

	List<LoanApplication2> findByUserId(Long userId);

	Optional<LoanApplication2> findByLoanApplicationId(Long loanId);

	Optional<LoanApplication2> findByUserIdAndLoanApplicationId(Long userId, Long loanId);

	Optional<LoanApplication2> findById2(Long loanId);

	Optional<LoanApplication2> findByUserIdAndId2(Long userId, Long loanId);
	
	@Query("SELECT t1 FROM LoanApplication2 t1 INNER JOIN LoanApplication3 t2 ON t1.userId=t2.userId")
	List<LoanApplication2> findAllLoanApplication2();

}



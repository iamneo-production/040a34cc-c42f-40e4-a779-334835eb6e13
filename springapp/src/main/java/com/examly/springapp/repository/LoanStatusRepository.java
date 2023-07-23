package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.LoanStatus;

@Repository
public interface LoanStatusRepository extends JpaRepository<LoanStatus, Long> {
	
	
    List<Loan> findByLoanId(long id);

    Loan findByUserId(long id);

    Loan findByUserIdAndLoanId(Long userId, Long loanId);
	
}

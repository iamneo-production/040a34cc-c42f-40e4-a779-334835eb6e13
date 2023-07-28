package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.LoanStatus;

@Repository
public interface LoanStatusRepository extends JpaRepository<LoanStatus, Long> {
	
	
    List<LoanStatus> findByLoanId(long id);

    LoanStatus findByUserId(long id);

    LoanStatus findByUserIdAndLoanId(Long userId, Long loanId);
	
}
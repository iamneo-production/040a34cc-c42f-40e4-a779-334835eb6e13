package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan,Long>{
	List<Loan> findByLoanId(long id);

	Loan findByUserId(long id);

	Loan findByUserIdAndLoanId(Long userId, Long loanId);
}

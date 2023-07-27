package com.examly.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educationloan.PortalBackend.entity.LoanApplication3;

@Repository
public interface LoanApplication3Repository extends JpaRepository<LoanApplication3, Long> {

	Optional<LoanApplication3> findByTenthMarksheetFileName(String name);

	Optional<LoanApplication3> findByUserId(Long userId);

	Optional<LoanApplication3> findByLoanApplicationId(Long loanId);

	Optional<LoanApplication3> findByUserIdAndLoanApplicationId(Long userId, Long id);

	Optional<LoanApplication3> findByImageId(Long loanId);

	Optional<LoanApplication3> findByUserIdAndImageId(Long userId, Long loanId);

}



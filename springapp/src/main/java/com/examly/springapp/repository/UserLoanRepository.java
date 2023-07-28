package com.examly.springapp.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.UserLoans;

@Repository
public interface UserLoanRepository extends JpaRepository<UserLoans,Long>{

	UserLoans findByUserId(long id);

	UserLoans findByUserIdAndLoanId(Long userId, Long loanId);

	List<UserLoans> findByLoanNextDueDateBefore(LocalDate currentDate);

	void deleteByUserId(Long id);

}
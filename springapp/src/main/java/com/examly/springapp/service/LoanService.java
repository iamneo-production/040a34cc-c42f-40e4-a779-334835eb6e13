package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Loan;

@Service
public interface LoanService {
	public void createLoan(Loan loan);
	public List<Loan> getLoans();
	public void updateLoan(long id,Loan loan);
	public void deleteLoan(long id);
	public Optional<Loan> getSingleLoans(long id);
}

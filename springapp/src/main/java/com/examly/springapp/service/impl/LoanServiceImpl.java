package com.examly.springapp.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Loan;
import com.examly.springapp.repository.LoanRepository;
import com.examly.springapp.service.LoanService;

@Service
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private LoanRepository loanRepository;

	@Override
	public void createLoan(Loan loan) {
		// TODO Auto-generated method stub
		loanRepository.save(loan);
	}

	@Override
	public List<Loan> getLoans() {
		return loanRepository.findAll();
	}

	@Override
	public void updateLoan(long id,Loan loan) {
		Loan updateLoan=loanRepository.findById(id).orElse(new Loan());
		updateLoan.setImage(loan.getImage());
		updateLoan.setName(loan.getName());
		updateLoan.setInterest(loan.getInterest());
		updateLoan.setInformation(loan.getInformation());
		loanRepository.save(updateLoan);
	}

	@Override
	public void deleteLoan(long id) {
		loanRepository.deleteById(id);
	}

	@Override
	public Optional<Loan> getSingleLoans(long id) {
		// TODO Auto-generated method stub
		return loanRepository.findById(id);
	}
	

}

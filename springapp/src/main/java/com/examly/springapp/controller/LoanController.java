package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

import com.examly.springapp.model.Loan;
import com.examly.springapp.service.LoanService;
import com.examly.springapp.repository.LoanRepository;

@RestController
public class LoanController {
    
    @Autowired
    private LoanRepository loanRepository;

	@Autowired
	private LoanService loanService;

    @PostMapping("/loans")
    public ResponseEntity<String> addLoan(@RequestBody Loan loan)  {
		//loanService.addUserLoan(loan);
		return new ResponseEntity<>("true",HttpStatus.OK);
	}

    @GetMapping("/loans/{id}")
	public Loan getLoan(@PathVariable long id) {
        Loan loan=loanRepository.findById(id).orElse(new Loan());
        loan.setUserId(123);
		return loan;
	}

    @PutMapping("/loans/{id}")
	public ResponseEntity<String> updatePayment(@PathVariable long id,@RequestBody Loan loan){
		//loanService.approveLoan(loan.getUserId(),loan.getLoanId());
		return new ResponseEntity<>("success",HttpStatus.OK);
	} 

    @DeleteMapping("/loans/{id}")
    public void deleteLoan(@PathVariable("id") long id){
        //loanRepository.deleteById(id);
    }


}
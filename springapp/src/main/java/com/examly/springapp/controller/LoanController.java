package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Loan;
import com.examly.springapp.service.LoanService;


@RestController
@RequestMapping("/loan")
@CrossOrigin
public class LoanController {
	@Autowired
	private LoanService loanService;
	
	@PostMapping("/create-loans")
	public ResponseEntity<String> createLoans(@RequestBody Loan loan){
		loanService.createLoan(loan);
		return new ResponseEntity<>("Loan Created",HttpStatus.OK);
	}
	
	@GetMapping("/get-loans")
	public ResponseEntity<List<Loan>> getLoans(){
		return new ResponseEntity<>(loanService.getLoans(),HttpStatus.OK);
	}
	
	@PutMapping("update-loans/{id}")
	public ResponseEntity<String> updateLoans(@PathVariable long id,@RequestBody Loan loan){
		loanService.updateLoan(id, loan);
		return new ResponseEntity<>("Loan Updated",HttpStatus.OK);
	}
	
	@DeleteMapping("delete-loans/{id}")
	public void deleteLoan(@PathVariable long id) {
		loanService.deleteLoan(id);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Loan>> getSingleLoans(@PathVariable long id){
		return new ResponseEntity<>(loanService.getSingleLoans(id),HttpStatus.OK);
	}
	
}

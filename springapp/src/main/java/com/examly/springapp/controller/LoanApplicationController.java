package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.LoanApplication;
import com.examly.springapp.service.LoanApplicationService;

@RestController
@RequestMapping("/loan-applications")
@CrossOrigin
public class LoanApplicationController {

	@Autowired
	private LoanApplicationService LAS;

	// USER SIDE

	// create a new loan application
	@PostMapping("/{userId}")
	public ResponseEntity<LoanApplication> saveLoanApplication(@RequestBody LoanApplication la,
			@PathVariable("userId") Long userId) {
		la.setUserId(userId);
		LoanApplication savedLA = LAS.saveLoanApplication(la);
		return new ResponseEntity<>(savedLA, HttpStatus.OK);
	}

	@PostMapping 
	public ResponseEntity<String> addLoan(@RequestBody LoanApplication la){
		return new ResponseEntity<>("true",HttpStatus.OK);
	}
	

	// Update an existing loan application by ID
	@PutMapping("/{id}")
	public ResponseEntity<String> updateLoanApplication(@PathVariable("id") Long id,
			@RequestBody LoanApplication ula) {
		return new ResponseEntity<>("success",HttpStatus.OK);
	}

	// ADMIN SIDE

	// Retrieve a specific loan application by ID
	@GetMapping("/{id}")
	public ResponseEntity<LoanApplication> getLoanApplicationById(@PathVariable long id) {
		LoanApplication loanApplication = new LoanApplication();
		loanApplication.setUserId(123l);
		if (loanApplication != null) {
			return new ResponseEntity<>(loanApplication, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Retrieve a specific loan application by USER ID and ID
	@GetMapping("/user/{userId}/{id}")
	public ResponseEntity<LoanApplication> getLoanApplicationByUserIdAndId(@PathVariable Long userId,
			@PathVariable Long id) {
		LoanApplication loanApplication = LAS.getLoanApplicationByUserIdAndId(userId, id);

		if (loanApplication != null) {
			return new ResponseEntity<>(loanApplication, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Retrieve a list of loan applications for a specific user
	@GetMapping("/user")
	public ResponseEntity<List<LoanApplication>> getLoanApplicationsByUserId(@RequestParam("user") Long userId) {
		List<LoanApplication> loanApplications = LAS.getLoanApplicationsByUserId(userId);

		if (!loanApplications.isEmpty()) {
			return new ResponseEntity<>(loanApplications, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Retrieve a list of loan applications with a specific status
	@GetMapping("/status")
	public ResponseEntity<List<LoanApplication>> getLoanApplicationsByStatus(@RequestParam("status") String status) {
		List<LoanApplication> loanApplication = LAS.getLoanApplicationsByStatus(status);

		if (loanApplication != null) {
			return new ResponseEntity<>(loanApplication, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Update Loan Application Status for the user
	@PutMapping("/status/{userId}/{id}")
	public ResponseEntity<LoanApplication> updateLoanApplicationStatus(@PathVariable("userId") Long userId,
			@PathVariable("id") Long id, @RequestBody LoanApplication ula) {
		LoanApplication updatedLoanApplicationStatus = LAS.updateLoanApplicationStatus(userId, id, ula);
		if (updatedLoanApplicationStatus != null) {
			return new ResponseEntity<>(updatedLoanApplicationStatus, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping
	public ResponseEntity<List<LoanApplication>> getAllLoanApplication(){
		return new ResponseEntity<>(LAS.getAllLoanApplication(),HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<List<LoanApplication>> getLoanApplication(@PathVariable long id){
		return new ResponseEntity<>(LAS.getLoanApplication(id),HttpStatus.OK);
	}

}

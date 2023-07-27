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

import com.educationloan.PortalBackend.entity.LoanApplication2;
import com.educationloan.PortalBackend.service.LoanApplication2Service;

@RestController
@RequestMapping("/loan-applications2")
@CrossOrigin
public class LoanApplication2Controller {

	@Autowired
	private LoanApplication2Service LAS;

	LoanApplication2 loan;

	// USER SIDE

	// create a new loan application
	@PostMapping("/{userId}/{loanId}")
	public ResponseEntity<LoanApplication2> saveLoanApplication2(@RequestBody LoanApplication2 la,
			@PathVariable("userId") Long userId, @PathVariable("loanId") Long loanId) {
		LoanApplication2 savedLA = LAS.saveLoanApplication2(la, userId, loanId);
		return new ResponseEntity<>(savedLA, HttpStatus.OK);
	}

	// Update an existing loan by loanID
	@PutMapping("/{id}")
	public ResponseEntity<LoanApplication2> updateLoanApplication2(@PathVariable("id") Long id,
			@RequestBody LoanApplication2 ula) {
		LoanApplication2 updatedLoanApplication = LAS.updateLoanApplication2(id, ula);
		if (updatedLoanApplication != null) {
			return new ResponseEntity<>(updatedLoanApplication, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// ADMIN SIDE

	// Retrieve a specific loan application by ID
	@GetMapping("/{id}")
	public ResponseEntity<LoanApplication2> getLoanApplication2ById(@PathVariable Long id) {
		LoanApplication2 loanApplication = LAS.getLoanApplication2ById(id);

		if (loanApplication != null) {
			return new ResponseEntity<>(loanApplication, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Retrieve a specific loan application by USER ID and LoanID
	@GetMapping("/user/{userId}/{id}")
	public ResponseEntity<LoanApplication2> getLoanApplication2ByUserIdAndId(@PathVariable Long userId,
			@PathVariable Long id) {
		LoanApplication2 loanApplication = LAS.getLoanApplication2ByUserIdAndId(userId, id);

		if (loanApplication != null) {
			return new ResponseEntity<>(loanApplication, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Retrieve a list of loan applications for a specific user
	@GetMapping("/user")
	public ResponseEntity<List<LoanApplication2>> getLoanApplications2ByUserId(@RequestParam("user") Long userId) {
		List<LoanApplication2> loanApplications = LAS.getLoanApplications2ByUserId(userId);

		if (!loanApplications.isEmpty()) {
			return new ResponseEntity<>(loanApplications, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping
	public ResponseEntity<List<LoanApplication2>> getAllLoanApplication2(){
		return new ResponseEntity<>(LAS.getAllLoanApplication2(),HttpStatus.OK);
	}

}

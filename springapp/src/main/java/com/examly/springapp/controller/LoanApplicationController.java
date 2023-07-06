package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.loanPortalMain.model.LoanApplication;
import com.project.loanPortalMain.service.LoanApplicationService;

@RestController
public class LoanApplicationController {
	
	@Autowired
	private LoanApplicationService LAS;
	
	// USER SIDE
	
	// create a new loan application
	@PostMapping("/loan-applications")
	public ResponseEntity<LoanApplication>  saveLoanApplication(@RequestBody LoanApplication la)
	{
		LoanApplication savedLA = LAS.saveLoanApplication(la);
		return new ResponseEntity<>(savedLA, HttpStatus.OK);
	}
	
	
	
	// Update an existing loan application by ID
	@PutMapping("loan-applications/{id}")
    public ResponseEntity<LoanApplication> updateLoanApplication(@PathVariable("id") Long id, @RequestBody LoanApplication ula) {
        LoanApplication updatedLoanApplication = LAS.updateLoanApplication(id, ula);
        if (updatedLoanApplication != null) {
            return new ResponseEntity<>(updatedLoanApplication, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }	 
	
	
	
	
		 
		 
		 
	// ADMIN SIDE	 
		 
		 
	// Retrieve a specific loan application by ID
	@GetMapping("loan-applications/{id}")
	public ResponseEntity<LoanApplication> getLoanApplicationById(@PathVariable Long id)
	{
		LoanApplication loanApplication = LAS.getLoanApplicationById(id);
		
		 if (loanApplication != null) {
	            return new ResponseEntity<>(loanApplication, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	}
	
	
	// Retrieve a specific loan application by USER ID and ID
	@GetMapping("loan-applications/user/{userId}/{id}")
	public ResponseEntity<LoanApplication> getLoanApplicationByUserIdAndId(@PathVariable Long userId, @PathVariable Long id)
	{
		LoanApplication loanApplication = LAS.getLoanApplicationByUserIdAndId(userId, id);
		
		 if (loanApplication != null) {
	            return new ResponseEntity<>(loanApplication, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	}		
	
	
	 
	 // Retrieve a list of loan applications for a specific user
	@GetMapping("loan-applications/user")
	public ResponseEntity<List<LoanApplication>> getLoanApplicationsByUserId(@RequestParam("user") Long userId) {
	    List<LoanApplication> loanApplications = LAS.getLoanApplicationsByUserId(userId);
	    
	    if (!loanApplications.isEmpty()) {
	        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}

	 
	 
	 //Retrieve a list of loan applications with a specific status
	 @GetMapping("/loan-applications/status")
		public ResponseEntity<List<LoanApplication>> getLoanApplicationsByStatus(@RequestParam("status") String status)
		{
			 List<LoanApplication> loanApplication = LAS.getLoanApplicationsByStatus(status);
			
			 if (loanApplication != null) {
		            return new ResponseEntity<>(loanApplication, HttpStatus.OK);
		        } else {
		            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		        }
		}

	 
	// Update Loan Application Status for the user
	 @PutMapping("loan-applications/status/{userId}/{id}")
	    public ResponseEntity<LoanApplication> updateLoanApplicationStatus(@PathVariable("userId") Long userId, @PathVariable("id") Long id, @RequestBody LoanApplication ula) {
	        LoanApplication updatedLoanApplicationStatus = LAS.updateLoanApplicationStatus(userId, id, ula);
	        if (updatedLoanApplicationStatus != null) {
	            return new ResponseEntity<>(updatedLoanApplicationStatus, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }		 
	
}


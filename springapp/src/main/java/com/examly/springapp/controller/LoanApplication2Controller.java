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

import com.project.loanPortalMain.model.LoanApplication2;
import com.project.loanPortalMain.service.LoanApplication2Service;


@RestController
public class LoanApplication2Controller {
	
	@Autowired
	private LoanApplication2Service LAS;
	
	// USER SIDE
	
	//create a new loan application
	@PostMapping("/loan-applications2")
	public ResponseEntity<LoanApplication2>  saveLoanApplication2(@RequestBody LoanApplication2 la)
	{
		LoanApplication2 savedLA = LAS.saveLoanApplication2(la);
		return new ResponseEntity<>(savedLA, HttpStatus.OK);
	}
	
	
	//Update an existing loan by ID
	@PutMapping("loan-applications2/{id}")
    public ResponseEntity<LoanApplication2> updateLoanApplication2(@PathVariable("id") Long id, @RequestBody LoanApplication2 ula) {
        LoanApplication2 updatedLoanApplication = LAS.updateLoanApplication2(id, ula);
        if (updatedLoanApplication != null) {
            return new ResponseEntity<>(updatedLoanApplication, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }	 
	
	
	
	
	
	// ADMIN SIDE
	
	
	
	//Retrieve a specific loan application by ID
	@GetMapping("loan-applications2/{id}")
	public ResponseEntity<LoanApplication2> getLoanApplication2ById(@PathVariable Long id)
	{
		LoanApplication2 loanApplication = LAS.getLoanApplication2ById(id);
		
		 if (loanApplication != null) {
	            return new ResponseEntity<>(loanApplication, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	}
	
	
	
	
	// Retrieve a specific loan application by USER ID and ID
	@GetMapping("loan-applications2/user/{userId}/{id}")
	public ResponseEntity<LoanApplication2> getLoanApplication2ByUserIdAndId(@PathVariable Long userId, @PathVariable Long id)
	{
		LoanApplication2 loanApplication = LAS.getLoanApplication2ByUserIdAndId(userId, id);
		
		 if (loanApplication != null) {
	            return new ResponseEntity<>(loanApplication, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	}			
		
		
		 
	// Retrieve a list of loan applications for a specific user
	@GetMapping("loan-applications2/user")
	public ResponseEntity<List<LoanApplication2>> getLoanApplications2ByUserId(@RequestParam("user") Long userId) {
	    List<LoanApplication2> loanApplications = LAS.getLoanApplications2ByUserId(userId);
	    
	    if (!loanApplications.isEmpty()) {
	        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}	
	
	
}

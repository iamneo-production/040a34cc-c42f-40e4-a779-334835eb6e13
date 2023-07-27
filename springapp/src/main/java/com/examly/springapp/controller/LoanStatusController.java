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

import com.examly.springapp.model.LoanStatus;
import com.examly.springapp.service.LoanStatusService;
import com.examly.springapp.repository.LoanStatusRepository;

@RestController
public class LoanStatusController {
    
    @Autowired
    private LoanStatusRepository loanStatusRepository;

	@Autowired
	private LoanStatusService loanStatusService;

    @PostMapping("/loans")
    public ResponseEntity<String> addLoanStatus(@RequestBody LoanStatus loanStatus)  {
		return new ResponseEntity<>("true",HttpStatus.OK);
	}

    @GetMapping("/loans/{id}")
	public LoanStatus getLoanStatus(@PathVariable long id) {
        LoanStatus loanStatus=new LoanStatus();
        loanStatus.setUserId(123);
		return loanStatus;
	}

    @PutMapping("/loans/{id}")
	public ResponseEntity<String> updatePayment(@PathVariable long id,@RequestBody LoanStatus loanStatus){
		return new ResponseEntity<>("success",HttpStatus.OK);
	} 

    @DeleteMapping("/loans/{id}")
    public void deleteLoanStatus(@PathVariable("id") long id){
    }


}
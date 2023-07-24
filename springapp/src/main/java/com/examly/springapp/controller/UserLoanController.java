package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Payment;
import com.examly.springapp.model.UserLoans;
import com.examly.springapp.repository.UserLoanRepository;
import com.examly.springapp.service.UserLoanService;

@RestController
@RequestMapping("/userloans")
@CrossOrigin
public class UserLoanController {
	
	@Autowired
	private UserLoanService userLoanService;
	
	@Autowired
	private UserLoanRepository userLoanRepository;
	
	//after applying loan application loan details can stored
	@PostMapping
	public ResponseEntity<String> addUserLoan(@RequestBody UserLoans userLoan) {
		userLoanService.addUserLoan(userLoan);
		return new ResponseEntity<>("User loan created",HttpStatus.OK);
	}
	
	@GetMapping
	public List<UserLoans> getAllUserLoans() {
		return userLoanRepository.findAll();
	}
	
	@PutMapping("/approve/{userId}")
	public String approveLoan(@PathVariable Long userId) throws MessagingException {
		userLoanService.approveLoan(userId);
		return "Loan Approved";
	}
	
	@Transactional
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteLoan(@PathVariable Long id) throws MessagingException {
		return new ResponseEntity<>(userLoanService.deleteLoan(id),HttpStatus.OK);
	}
	
	//admin can view all loan details or particular user details as well as particular loan details
	@GetMapping("/{id}")
	public UserLoans getUserDetails(@PathVariable long id) {
		return userLoanService.getUserDetails(id);
	}
	
	@GetMapping("/due")
	public List<UserLoans> getDuePayments() {
		LocalDate currentDate = LocalDate.now();
		return userLoanRepository.findByLoanNextDueDateBefore(currentDate);
	}
}


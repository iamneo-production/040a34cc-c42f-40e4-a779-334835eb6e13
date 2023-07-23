package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.java.com.examly.springapp.model.PaymentHistory;

import com.examly.springapp.repository.PaymentHistoryRepository;

import javax.mail.MessagingException;

@RestController
public class PaymentHistoryController {
	
	@Autowired
	private PaymentHistoryRepository paymentRepository;
	
	@PostMapping("/payments")
	public ResponseEntity<String> addPayment(@RequestBody PaymentHistory payment)  throws MessagingException {
		//paymentService.addPayment(payment);
		return new ResponseEntity<>("true",HttpStatus.OK);
	}
	
	@GetMapping("/payments/{id}")
	public Optional<PaymentHistory> getPayment(@PathVariable long id) {
		return paymentRepository.findById(id);
	}

	//admin side Payment History - to view all users payment
	@GetMapping
	public List<PaymentHistory> getAllPayment(){
		return paymentRepository.findAll();
	}

	@PutMapping("/payments/{id}")
	public ResponseEntity<String> updatePayment(@PathVariable long id,@RequestBody PaymentHistory payment){
		paymentRepository.deleteById(id);
		paymentRepository.save(payment);
		return new ResponseEntity<>("success",HttpStatus.OK);
	} 

	
}


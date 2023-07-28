package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Payment;
import com.examly.springapp.service.PaymentService;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService; 
	
	@PostMapping
	public ResponseEntity<String> addPayment(@RequestBody Payment payment) throws MessagingException {
		paymentService.addPayment(payment);
		return new ResponseEntity<>("Payment Successfull",HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public List<Payment> getPayment(@PathVariable long id) {
		return paymentService.getPayment(id);
	}

	//admin side Payment History - to view all users payment
	@GetMapping
	public List<Payment> getAllPayment(){
		return paymentService.getAllPayment();
	}
	
}

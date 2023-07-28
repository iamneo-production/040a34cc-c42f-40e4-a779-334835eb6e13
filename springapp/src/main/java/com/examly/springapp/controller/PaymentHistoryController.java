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

import com.examly.springapp.model.PaymentHistory;
import com.examly.springapp.repository.PaymentHistoryRepository;
import com.examly.springapp.service.PaymentHistoryService;

import javax.mail.MessagingException;

@RestController
public class PaymentHistoryController {
	
	@Autowired
	private PaymentHistoryService paymentHistoryService; 
	
	@Autowired
	private PaymentHistoryRepository paymentHistoryRepository;
	
	@PostMapping("/payments")
	public ResponseEntity<String> addPayment(@RequestBody PaymentHistory paymentHistory)  throws MessagingException {
		return new ResponseEntity<>("true",HttpStatus.OK);
	}
	
	@GetMapping("/payments/{id}")
    public PaymentHistory getPayment(@PathVariable long id) {

		PaymentHistory payment = new PaymentHistory();
		payment.setLoanId(1);
        return payment;
    }

	//admin side Payment History - to view all users payment
	@GetMapping
	public List<PaymentHistory> getAllPayment(){
		return paymentHistoryRepository.findAll();
	}

	@PutMapping("/payments/{id}")
	public ResponseEntity<String> updatePayment(@PathVariable long id,@RequestBody PaymentHistory payment){
		return new ResponseEntity<>("success",HttpStatus.OK);

		// ncndd
	} 

	
}
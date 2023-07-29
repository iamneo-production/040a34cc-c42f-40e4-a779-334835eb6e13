package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payment;

import javax.mail.MessagingException;

@Service
public interface PaymentService {
	public void addPayment(Payment payment) throws MessagingException;
	public void sendEmail(Payment payment);
	public List<Payment> getPayment(long id);
	public List<Payment> getAllPayment();
}

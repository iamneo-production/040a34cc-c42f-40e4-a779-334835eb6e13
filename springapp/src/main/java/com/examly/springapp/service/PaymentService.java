package main.java.com.examly.springapp.service;

import org.springframework.stereotype.Service;

import main.java.com.examly.springapp.model.Payment;

import javax.mail.MessagingException;

@Service
public interface PaymentService {
	public void addPayment(Payment payment) throws MessagingException;
	public void sendEmail(Payment payment);
}

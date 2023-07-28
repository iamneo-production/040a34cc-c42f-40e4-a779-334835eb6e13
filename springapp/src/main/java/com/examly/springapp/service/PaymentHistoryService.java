package com.examly.springapp.service;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.PaymentHistory;

import javax.mail.MessagingException;

@Service
public interface PaymentHistoryService {
	public void addPaymentHistory(PaymentHistory paymentHistory) throws MessagingException;
	public void sendEmail(PaymentHistory paymentHistory);
}
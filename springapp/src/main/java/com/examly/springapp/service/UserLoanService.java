package com.examly.springapp.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payment;
import com.examly.springapp.model.UserLoans;

import javax.mail.MessagingException;

@Service
public interface UserLoanService {
	public UserLoans getUserDetails(long id);
	public void updateUserDetails(Payment payment) throws MessagingException;
	public void addUserLoan(UserLoans userLoan);
	public double calculateEMI(double principalAmount,double interestRate,int loanTenure);
	public double calculatePenalty(double paymentAmount);
	public boolean isPaymentLate(LocalDate nextDueDate);
	public boolean isPaymentRight(double paymentAmount,double emi);
	public LocalDate calculateNextDueDate(LocalDate previousNextDueDate);
	public void sendLoanCompletionMail(long id) throws MessagingException;
	public void approveLoan(Long userId) throws MessagingException;
	public String deleteLoan(Long id) throws MessagingException;
}

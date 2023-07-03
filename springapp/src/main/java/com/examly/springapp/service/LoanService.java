package com.examly.springapp.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payment;
import com.examly.springapp.model.Loan;

import javax.mail.MessagingException;

@Service
public interface LoanService {
	public List<Loan> getLoanDetails(long id) throws Exception;
	public Loan getUserDetails(long id);
	public List<Loan> getAllUserLoanDetails();
	public void updateUserDetails(Payment payment) throws MessagingException;
	public void addUserLoan(Loan loan);
	public double calculateEMI(double principalAmount,double interestRate,int loanTenure);
	public double calculatePenalty(double paymentAmount);
	public boolean isPaymentLate(LocalDate nextDueDate);
	public boolean isPaymentRight(double paymentAmount,double emi);
	public LocalDate calculateNextDueDate(LocalDate previousNextDueDate);
	public void sendLoanCompletionMail(long id) throws MessagingException;
	public void approveLoan(Long userId, Long loanId);
}

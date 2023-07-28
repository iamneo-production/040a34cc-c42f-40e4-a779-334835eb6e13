package com.examly.springapp.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.PaymentHistory;
import com.examly.springapp.model.LoanStatus;

import javax.mail.MessagingException;

@Service
public interface LoanStatusService {
	public List<LoanStatus> getLoanStatusDetails(long id) throws Exception;
	public LoanStatus getUserDetails(long id);
	public List<LoanStatus> getAllUserLoanStatusDetails();
	public void updateUserDetails(PaymentHistory payment) throws MessagingException;
	public void addUserLoanStatus(LoanStatus loanStatus);
	public double calculateEMI(double principalAmount,double interestRate,int loanStatusTenure);
	public double calculatePenalty(double paymentAmount);
	public boolean isPaymentHistoryLate(LocalDate nextDueDate);
	public boolean isPaymentHistoryRight(double paymentAmount,double emi);
	public LocalDate calculateNextDueDate(LocalDate previousNextDueDate);
	public void sendLoanStatusCompletionMail(long id) throws MessagingException;
	public void approveLoanStatus(Long userId, Long loanId);
}
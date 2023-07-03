package main.java.com.examly.springapp.model;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;


import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Table
public class Payment {

	@Id
    @Column
	private long id;
    @Column
	private long loanId;
	@Column
	private long userId;
	@Column
	private String loanName;
	@Column
	private String transactionId;
    @Column
	private double amount;
	@Column
	private double forLoan;
	@Column
	private double penaltyAmount;
	@DateTimeFormat(pattern="dd-MM-yyyy")
    @Column
	private LocalDate paymentDate;
	@DateTimeFormat(pattern="HH:mm:ss")
	@Column
	private LocalTime paymentTime;
	@Column
	private String paymentMethod;
	@Column
	private String paymentBank;
	@Column
	private String paymentBankNumber;
	

	public Payment() {
		
	}

	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public long getLoanId() {
		return loanId;
	}



	public void setLoanId(long loanId) {
		this.loanId = loanId;
	}



	public long getUserId() {
		return userId;
	}



	public void setUserId(long userId) {
		this.userId = userId;
	}



	public String getLoanName() {
		return loanName;
	}



	public void setLoanName(String loanName) {
		this.loanName = loanName;
	}



	public String getTransactionId() {
		return transactionId;
	}



	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}



	public double getAmount() {
		return amount;
	}



	public void setAmount(double amount) {
		this.amount = amount;
	}



	public double getForLoan() {
		return forLoan;
	}



	public void setForLoan(double forLoan) {
		this.forLoan = forLoan;
	}



	public double getPenaltyAmount() {
		return penaltyAmount;
	}



	public void setPenaltyAmount(double penaltyAmount) {
		this.penaltyAmount = penaltyAmount;
	}



	public LocalDate getPaymentDate() {
		return paymentDate;
	}



	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}



	public LocalTime getPaymentTime() {
		return paymentTime;
	}



	public void setPaymentTime(LocalTime paymentTime) {
		this.paymentTime = paymentTime;
	}



	public String getPaymentMethod() {
		return paymentMethod;
	}



	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}



	public String getPaymentBank() {
		return paymentBank;
	}



	public void setPaymentBank(String paymentBank) {
		this.paymentBank = paymentBank;
	}



	public String getPaymentBankNumber() {
		return paymentBankNumber;
	}



	public void setPaymentBankNumber(String paymentBankNumber) {
		this.paymentBankNumber = paymentBankNumber;
	}

	
}


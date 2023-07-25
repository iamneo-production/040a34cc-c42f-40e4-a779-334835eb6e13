package com.examly.springapp.model;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserLoans {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column(unique=true)
	private long userId;
	private long loanId;
	private String loanName;
	private double loanAmount;	
	private String loanStatus;	
	private int loanTenure;
	private double interestRate;	 
	private int educationPeriod;
	private double principalAmount;
	private double interestAmount;
	private double principalAmountPaid; 
	private double interestAmountPaid;
	private double totalAmountRepaid;	
	private double EMI=0;	
	private int noOfPayments; 
	@DateTimeFormat(pattern="dd-MM-yyyy")
	private LocalDate loanStartDate=null;
	@DateTimeFormat(pattern="dd-MM-yyyy")
	private LocalDate loanEndDate=null;
	@DateTimeFormat(pattern="dd-MM-yyyy")
	private LocalDate loanNextDueDate=null; //(m)
	
	
	public int getNoOfPayments() {
		return noOfPayments;
	}
	public void setNoOfPayments(int noOfPayments) {
		this.noOfPayments = noOfPayments;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public long getLoanId() {
		return loanId;
	}
	public void setLoanId(long loanId) {
		this.loanId = loanId;
	}
	public String getLoanName() {
		return loanName;
	}
	public void setLoanName(String loanName) {
		this.loanName = loanName;
	}
	public String getLoanStatus() {
		return loanStatus;
	}
	public void setLoanStatus(String loanStatus) {
		this.loanStatus = loanStatus;
	}
	public double getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}
	public double getTotalAmountRepaid() {
		return totalAmountRepaid;
	}
	public void setTotalAmountRepaid(double totalAmountRepaid) {
		this.totalAmountRepaid = totalAmountRepaid;
	}
	public double getEMI() {
		return EMI;
	}
	public void setEMI(double eMI) {
		EMI = eMI;
	}
	public int getLoanTenure() {
		return loanTenure;
	}
	public void setLoanTenure(int loanTenure) {
		this.loanTenure = loanTenure;
	}
	public double getInterestRate() {
		return interestRate;
	}
	public void setInterestRate(double interestRate) {
		this.interestRate = interestRate;
	}
	public double getPrincipalAmount() {
		return principalAmount;
	}
	public void setPrincipalAmount(double principalAmount) {
		this.principalAmount = principalAmount;
	}
	public double getInterestAmount() {
		return interestAmount;
	}
	public void setInterestAmount(double interestAmount) {
		this.interestAmount = interestAmount;
	}
	public double getInterestAmountPaid() {
		return interestAmountPaid;
	}
	public void setInterestAmountPaid(double interestAmountPaid) {
		this.interestAmountPaid = interestAmountPaid;
	}
	public int getEducationPeriod() {
		return educationPeriod;
	}
	public void setEducationPeriod(int educationPeriod) {
		this.educationPeriod = educationPeriod;
	}
	public double getPrincipalAmountPaid() {
		return principalAmountPaid;
	}
	public void setPrincipalAmountPaid(double principalAmountPaid) {
		this.principalAmountPaid = principalAmountPaid;
	}
	public LocalDate getLoanStartDate() {
		return loanStartDate;
	}
	public void setLoanStartDate(LocalDate loanStartDate) {
		this.loanStartDate = loanStartDate;
	}
	public LocalDate getLoanEndDate() {
		return loanEndDate;
	}
	public void setLoanEndDate(LocalDate loanEndDate) {
		this.loanEndDate = loanEndDate;
	}
	public LocalDate getLoanNextDueDate() {
		return loanNextDueDate;
	}
	public void setLoanNextDueDate(LocalDate loanNextDueDate) {
		this.loanNextDueDate = loanNextDueDate;
	}
}

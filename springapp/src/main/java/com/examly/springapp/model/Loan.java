package com.examly.springapp.model;

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
public class Loan {
    
    @Id
    @Column
    private long id;
    @Column
    private long userId;
    @Column
    private long loanId;
    @Column
	private String loanName;
    @Column
    private double loanAmount;
    @Column
    private double interestRate;
    @Column
    private String status;
    @Column
    private int loanTenure; 
    @Column	
	private int educationPeriod;
    @Column
	private double principalAmount;
	@Column
	private double interestAmount;
    @Column
    private double interest=0;
    @Column
    private String name="Education Loan";
	@Column
	private double principalAmountPaid; 
	@Column
	private double interestAmountPaid;
	@Column
	private double totalAmountRepaid;	
	@Column
	private double EMI=0;
    @Column	
	private double penalties=0; 
    @Column
    private LocalDate startDate;
    @Column 
    private LocalDate endDate;
    @Column
    private LocalDate loanNextDueDate;

    public Loan(){

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

    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    

    public double getInterest() {
        return interest;
    }

    public void setInterest(double interest) {
        this.interest = interest;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getLoanTenure() {
        return loanTenure;
    }

    public void setLoanTenure(int loanTenure) {
        this.loanTenure = loanTenure;
    }

    public int getEducationPeriod() {
        return educationPeriod;
    }

    public void setEducationPeriod(int educationPeriod) {
        this.educationPeriod = educationPeriod;
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

    public double getPrincipalAmountPaid() {
        return principalAmountPaid;
    }

    public void setPrincipalAmountPaid(double principalAmountPaid) {
        this.principalAmountPaid = principalAmountPaid;
    }

    public double getInterestAmountPaid() {
        return interestAmountPaid;
    }

    public void setInterestAmountPaid(double interestAmountPaid) {
        this.interestAmountPaid = interestAmountPaid;
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

    public double getPenalties() {
        return penalties;
    }

    public void setPenalties(double penalties) {
        this.penalties = penalties;
    }
    

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getLoanNextDueDate() {
        return loanNextDueDate;
    }

    public void setLoanNextDueDate(LocalDate loanNextDueDate) {
        this.loanNextDueDate = loanNextDueDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    
}
package com.examly.springapp.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LoanApplication2 {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long id2;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loan_id", referencedColumnName = "id")
	private LoanApplication loanApplication;

	private Long userId;

	// Education Details
	private String tenthSchoolName;
	private double tenthPercentage;

	private String twelvethSchoolName;
	private double twelvethPercentage;

	private String underGradCollege;
	private double underGradCgpa;

	// course details
	private String currentInstitutionName;
	private String courseName;
	private int courseDuration;
	private String dateOfCommencement;
	private String dateOfCompletion;

	// Loan details
	private String loanType;

	// year1 to year4 is the fee amount that has to be paid by the student in each
	// year (fee Structure)
	private Double year1;
	private Double year2;
	private Double year3;
	private Double year4;
	private Double totalLoanAmount;
	private String purpose;

	// Fetching current date
	private LocalDate applicationDate = LocalDate.now();

//	private int noOfInstallments;
//	private double amountPerMonth;	

	// Tenure is the no of years the student needs to clear his/her loan(loan term)
	private Double tenure;

	public Long getId2() {
		return id2;
	}

	public void setId2(Long id2) {
		this.id2 = id2;
	}

	public LoanApplication getLoanApplication() {
		return loanApplication;
	}

	public void setLoanApplication(LoanApplication loanApplication) {
		this.loanApplication = loanApplication;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getTenthSchoolName() {
		return tenthSchoolName;
	}

	public void setTenthSchoolName(String tenthSchoolName) {
		this.tenthSchoolName = tenthSchoolName;
	}

	public double getTenthPercentage() {
		return tenthPercentage;
	}

	public void setTenthPercentage(double tenthPercentage) {
		this.tenthPercentage = tenthPercentage;
	}

	public String getTwelvethSchoolName() {
		return twelvethSchoolName;
	}

	public void setTwelvethSchoolName(String twelvethSchoolName) {
		this.twelvethSchoolName = twelvethSchoolName;
	}

	public double getTwelvethPercentage() {
		return twelvethPercentage;
	}

	public void setTwelvethPercentage(double twelvethPercentage) {
		this.twelvethPercentage = twelvethPercentage;
	}

	public String getUnderGradCollege() {
		return underGradCollege;
	}

	public void setUnderGradCollege(String underGradCollege) {
		this.underGradCollege = underGradCollege;
	}

	public double getUnderGradCgpa() {
		return underGradCgpa;
	}

	public void setUnderGradCgpa(double underGradCgpa) {
		this.underGradCgpa = underGradCgpa;
	}

	public String getCurrentInstitutionName() {
		return currentInstitutionName;
	}

	public void setCurrentInstitutionName(String currentInstitutionName) {
		this.currentInstitutionName = currentInstitutionName;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public int getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}

	public String getDateOfCommencement() {
		return dateOfCommencement;
	}

	public void setDateOfCommencement(String dateOfCommencement) {
		this.dateOfCommencement = dateOfCommencement;
	}

	public String getDateOfCompletion() {
		return dateOfCompletion;
	}

	public void setDateOfCompletion(String dateOfCompletion) {
		this.dateOfCompletion = dateOfCompletion;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public Double getYear1() {
		return year1;
	}

	public void setYear1(Double year1) {
		this.year1 = year1;
	}

	public Double getYear2() {
		return year2;
	}

	public void setYear2(Double year2) {
		this.year2 = year2;
	}

	public Double getYear3() {
		return year3;
	}

	public void setYear3(Double year3) {
		this.year3 = year3;
	}

	public Double getYear4() {
		return year4;
	}

	public void setYear4(Double year4) {
		this.year4 = year4;
	}

	public Double getTotalLoanAmount() {
		return totalLoanAmount;
	}

	public void setTotalLoanAmount(Double totalLoanAmount) {
		this.totalLoanAmount = totalLoanAmount;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public LocalDate getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(LocalDate applicationDate) {
		this.applicationDate = applicationDate;
	}

	public Double getTenure() {
		return tenure;
	}

	public void setTenure(Double tenure) {
		this.tenure = tenure;
	}
}

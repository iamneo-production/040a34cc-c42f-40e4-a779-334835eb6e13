package com.examly.springapp.model;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LoanApplication2 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id2;
	
	private Long id;
	private Long userId;
	
	//course details
	private String tenthSchoolName;
	private double tenthPercentage;
	
	private String twelvethSchoolName;
	private double twelvethPercentage;
	
	private String currentInstitutionName;
	private String courseName;
	private int courseDuration;
	private Date dateOfCommencement;
	private Date dateOfCompletion;
	
	// Loan details
	private String loanType;
	private Double year1;
	private Double year2;
	private Double year3;
	private Double year4;
	private Double totalLoanAmount;
	private String purpose;	
		
	// Fetching current date  
	private LocalDate applicationDate = LocalDate.now();
	
	private int noOfInstallments;
	private double amountPerMonth;	
	private int tenure;
	
}

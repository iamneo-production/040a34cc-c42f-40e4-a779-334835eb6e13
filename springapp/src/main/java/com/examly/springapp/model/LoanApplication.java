package com.examly.springapp.model;

import java.sql.Date;

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
public class LoanApplication {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long userId;
	
	// personal details
	private String firstName;
	private String middleName;
	private String lastName;
	private Date dateOfBirth;
	private int age;
	private String gender;
	
	private String fathersName;
	private String fathersOccupation;
	private Double familyIncome;
	
	private String category;
	private String emailId;
	private int contactNo;
	private int aadharNo;
	private String panNo;
	private String address1;
	private String address2;
	private String maritalStatus;
	private String country;
	private String state;
	private int pincode;
	
	
	// Bank details
	private String bankName;
	private String BranchName;
	private String IFSCCode;
	private String accountType;
	private int accountNumber;
	private String accountHolderName;
	
	
	//loan status
	private String status = "pending";
}




package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.LoanApplication;
import com.examly.springapp.model.LoanApplication2;
import com.examly.springapp.model.LoanApplication3;
import com.examly.springapp.repository.LoanApplicationRepository;

@Service
public class LoanApplicationService {

	@Autowired
	private LoanApplicationRepository loanRepo;

	@Autowired
	private LoanApplication2Service loanApplication2Service;

	@Autowired
	private LoanApplication3Service loanApplication3Service;

	// Logic

	// USER SIDE

	// create a new loan application
	public LoanApplication saveLoanApplication(LoanApplication l) {
		LoanApplication savedLoanApplication = loanRepo.save(l);

		LoanApplication2 loanApplication2 = new LoanApplication2();

		loanApplication2.setId2(savedLoanApplication.getId());

		// foreign key loan_id will be created in LoanApplication2
		loanApplication2Service.saveLoan2(loanApplication2);

		LoanApplication3 loanApplication3 = new LoanApplication3();

		loanApplication3.setImageId(savedLoanApplication.getId());

		// foreign key loan_id will be created in LoanApplication2
		loanApplication3Service.saveLoan3(loanApplication3);

		return savedLoanApplication;
	}

	// Update an existing loan application by ID
	public LoanApplication updateLoanApplication(Long id, LoanApplication la) {

		LoanApplication existingUser = loanRepo.findById(id).orElse(null);

		if (existingUser != null) {

			// Update the user object with the new data

			// Update personal details
			existingUser.setFirstName(la.getFirstName());
			existingUser.setMiddleName(la.getMiddleName());
			existingUser.setLastName(la.getLastName());
			existingUser.setDateOfBirth(la.getDateOfBirth());
			existingUser.setAge(la.getAge());
			existingUser.setGender(la.getGender());
			existingUser.setFathersName(la.getFathersName());
			existingUser.setFathersOccupation(la.getFathersOccupation());
			existingUser.setFamilyIncome(la.getFamilyIncome());
			existingUser.setCategory(la.getCategory());
			existingUser.setEmailId(la.getEmailId());
			existingUser.setContactNo(la.getContactNo());
			existingUser.setAadharNo(la.getAadharNo());
			existingUser.setPanNo(la.getPanNo());
			existingUser.setAddress1(la.getAddress1());
			existingUser.setAddress2(la.getAddress2());
			existingUser.setMaritalStatus(la.getMaritalStatus());
			existingUser.setCountry(la.getCountry());
			existingUser.setState(la.getState());
			existingUser.setPincode(la.getPincode());

			// Update bank details
			existingUser.setBankName(la.getBankName());
			existingUser.setBranchName(la.getBranchName());
			existingUser.setIfscCode(la.getIfscCode());
			existingUser.setAccountType(la.getAccountType());
			existingUser.setAccountNumber(la.getAccountNumber());
			existingUser.setAccountHolderName(la.getAccountHolderName());

			return loanRepo.save(existingUser);

		}

		else {
			return null;
		}
	}

	// ADMIN SIDE

	// Retrieve a specific loan application by ID
	public LoanApplication getLoanApplicationById(Long id) {
		Optional<LoanApplication> loan = loanRepo.findById(id);
		return loan.orElse(null);
	}

	// Retrieve a specific loan application by USER ID and ID
	public LoanApplication getLoanApplicationByUserIdAndId(Long userId, Long id) {
		Optional<LoanApplication> loan = loanRepo.findByUserIdAndId(userId, id);
		return loan.orElse(null);
	}

	// Retrieve a list of loan applications for a specific user
	public List<LoanApplication> getLoanApplicationsByUserId(Long userId) {
		List<LoanApplication> loan = loanRepo.findByUserId(userId);
		return loan;
	}

	// Retrieve a list of loan applications with a specific status
	public List<LoanApplication> getLoanApplicationsByStatus(String status) {
		List<LoanApplication> loan = loanRepo.findByStatus(status);
		return loan;
	}

	// Update Loan Application Status for the user
	public LoanApplication updateLoanApplicationStatus(Long userId, Long id, LoanApplication la) {
		LoanApplication existingUser = loanRepo.findByUserIdAndId(userId, id).orElse(null);

		if (existingUser != null) {

			// Updating Loan Application Status for the user
			existingUser.setStatus(la.getStatus());
			return loanRepo.save(existingUser);

		} else {
			return null;
		}

	}

	public List<LoanApplication> getAllLoanApplication() {
		// TODO Auto-generated method stub
		return loanRepo.findAllByUserId();
	}

	public List<LoanApplication> getLoanApplication(long id) {
		// TODO Auto-generated method stub
		return loanRepo.findByUserId(id);
	}
}

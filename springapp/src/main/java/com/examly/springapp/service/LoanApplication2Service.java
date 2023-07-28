package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.LoanApplication2;
import com.examly.springapp.repository.LoanApplication2Repository;

@Service
public class LoanApplication2Service {

	@Autowired
	private LoanApplication2Repository loan2Repo;

	// Logic

	// USER SIDE

	// foreign key loan_id will be created
	public LoanApplication2 saveLoan2(LoanApplication2 l) {
		return loan2Repo.save(l);
	}

	// Creating/Updating the loan application by loan_id
	public LoanApplication2 saveLoanApplication2(LoanApplication2 l, Long userId, Long loanId) {
		Optional<LoanApplication2> loanApplication2Optional = loan2Repo.findById2(loanId);
		if (loanApplication2Optional.isPresent()) {
			LoanApplication2 existingLoanApplication2 = loanApplication2Optional.get();
			existingLoanApplication2.setUserId(userId);
			updateExistingLoanApplication2(existingLoanApplication2, l);
			return loan2Repo.save(existingLoanApplication2);
		} else {
			throw new IllegalArgumentException("LoanApplication with ID " + loanId + " not found");
		}

	}

	// Updating the loan Application for the particular loanId
	private void updateExistingLoanApplication2(LoanApplication2 existingLoanApplication2,
			LoanApplication2 newLoanApplication2) {
		existingLoanApplication2.setTenthSchoolName(newLoanApplication2.getTenthSchoolName());
		existingLoanApplication2.setTenthPercentage(newLoanApplication2.getTenthPercentage());
		existingLoanApplication2.setTwelvethSchoolName(newLoanApplication2.getTwelvethSchoolName());
		existingLoanApplication2.setTwelvethPercentage(newLoanApplication2.getTwelvethPercentage());
		existingLoanApplication2.setUnderGradCollege(newLoanApplication2.getUnderGradCollege());
		existingLoanApplication2.setUnderGradCgpa(newLoanApplication2.getUnderGradCgpa());
		existingLoanApplication2.setCurrentInstitutionName(newLoanApplication2.getCurrentInstitutionName());
		existingLoanApplication2.setCourseName(newLoanApplication2.getCourseName());
		existingLoanApplication2.setCourseDuration(newLoanApplication2.getCourseDuration());
		existingLoanApplication2.setDateOfCommencement(newLoanApplication2.getDateOfCommencement());
		existingLoanApplication2.setDateOfCompletion(newLoanApplication2.getDateOfCompletion());
		existingLoanApplication2.setLoanType(newLoanApplication2.getLoanType());
		existingLoanApplication2.setYear1(newLoanApplication2.getYear1());
		existingLoanApplication2.setYear2(newLoanApplication2.getYear2());
		existingLoanApplication2.setYear3(newLoanApplication2.getYear3());
		existingLoanApplication2.setYear4(newLoanApplication2.getYear4());
		existingLoanApplication2.setTotalLoanAmount(newLoanApplication2.getTotalLoanAmount());
		existingLoanApplication2.setPurpose(newLoanApplication2.getPurpose());
		existingLoanApplication2.setTenure(newLoanApplication2.getTenure());
	}

	// Update an existing loan application by LoanID
	public LoanApplication2 updateLoanApplication2(Long id, LoanApplication2 la) {

		LoanApplication2 existingUser = loan2Repo.findById2(id).orElse(null);

		if (existingUser != null) {

			// Update the user object with the new data

			existingUser.setTenthSchoolName(la.getTenthSchoolName());
			existingUser.setTenthPercentage(la.getTenthPercentage());
			existingUser.setTwelvethSchoolName(la.getTwelvethSchoolName());
			existingUser.setTwelvethPercentage(la.getTwelvethPercentage());
			existingUser.setCurrentInstitutionName(la.getCurrentInstitutionName());
			existingUser.setCourseName(la.getCourseName());
			existingUser.setCourseDuration(la.getCourseDuration());
			existingUser.setDateOfCommencement(la.getDateOfCommencement());
			existingUser.setDateOfCompletion(la.getDateOfCompletion());

			// Update loan details
			existingUser.setLoanType(la.getLoanType());
			existingUser.setYear1(la.getYear1());
			existingUser.setYear2(la.getYear2());
			existingUser.setYear3(la.getYear3());
			existingUser.setYear4(la.getYear4());
			existingUser.setTotalLoanAmount(la.getTotalLoanAmount());
			existingUser.setPurpose(la.getPurpose());
			existingUser.setTenure(la.getTenure());

			return loan2Repo.save(existingUser);
		} else {
			return null;
		}
	}

	// ADMIN SIDE

	// Retrieve a specific loan application by ID
	public LoanApplication2 getLoanApplication2ById(Long loanId) {
		Optional<LoanApplication2> loan = loan2Repo.findById2(loanId);
		return loan.orElse(null);
	}

	// Retrieve a specific loan application by USER ID and LoanID
	public LoanApplication2 getLoanApplication2ByUserIdAndId(Long userId, Long loanId) {
		Optional<LoanApplication2> loan = loan2Repo.findByUserIdAndId2(userId, loanId);
		return loan.orElse(null);
	}

	// Retrieve a list of loan applications for a specific user
	public List<LoanApplication2> getLoanApplications2ByUserId(Long userId) {
		List<LoanApplication2> loan = loan2Repo.findByUserId(userId);
		return loan;
	}

	public List<LoanApplication2> getAllLoanApplication2() {
		// TODO Auto-generated method stub
		return loan2Repo.findAllLoanApplication2();
	}

}

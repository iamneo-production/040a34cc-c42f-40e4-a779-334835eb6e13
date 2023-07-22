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
		
		
	// create a new loan application
	public LoanApplication2 saveLoanApplication2(LoanApplication2 l)
	{
		return loan2Repo.save(l);
	}
	
	
	// Update an existing loan application by ID
	public LoanApplication2 updateLoanApplication2(Long id, LoanApplication2 la) {
		
        LoanApplication2 existingUser = loan2Repo.findById(id).orElse(null);
        
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
            existingUser.setNoOfInstallments(la.getNoOfInstallments());
            existingUser.setAmountPerMonth(la.getAmountPerMonth());
            existingUser.setTenure(la.getTenure());
            
            return loan2Repo.save(existingUser);
        } else {
            return null;
        }
    }
	
	
	
	
	
	
	
	// ADMIN SIDE	 
	 
	 
	// Retrieve a specific loan application by ID
	public LoanApplication2 getLoanApplication2ById(Long id2)
	{
		Optional<LoanApplication2> loan = loan2Repo.findById(id2);
		return loan.orElse(null);
	}
	
	
	// Retrieve a specific loan application by USER ID and ID
	public LoanApplication2 getLoanApplication2ByUserIdAndId(Long userId, Long id)
	{
		Optional<LoanApplication2> loan = loan2Repo.findByUserIdAndId(userId, id);
		return loan.orElse(null);
	}	
		
		
	// Retrieve a list of loan applications for a specific user
	public List<LoanApplication2> getLoanApplications2ByUserId(Long userId)
	{
		List<LoanApplication2> loan = loan2Repo.findByUserId(userId);
		return loan;
	}
	
	
}


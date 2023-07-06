package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.loanPortalMain.model.LoanApplication;
import com.project.loanPortalMain.repository.LoanApplicationRepository;

@Service
public class LoanApplicationService {
	
	@Autowired
	private LoanApplicationRepository loanRepo;
	
	// Logic
	
	
	// USER SIDE
	
	
	// create a new loan application
	public LoanApplication saveLoanApplication(LoanApplication l)
	{
		return loanRepo.save(l);
	}
	
	
	// Update an existing loan application by ID
	public LoanApplication updateLoanApplication(Long userId, LoanApplication la) {
		
        LoanApplication existingUser = loanRepo.findById(userId).orElse(null);
        
        if (existingUser != null) 
        {
        	
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
            existingUser.setFathersName(la.getFathersName());
            existingUser.setFamilyIncome(la.getFamilyIncome());
            existingUser.setCategory(la.getCategory());
            existingUser.setEmailId(la.getEmailId());
            existingUser.setContactNo(la.getContactNo());
            existingUser.setAadharNo(la.getAadharNo());
            existingUser.setPanNo(la.getPanNo());
            existingUser.setMaritalStatus(la.getMaritalStatus());
            existingUser.setCountry(la.getCountry());
            existingUser.setState(la.getState());
            existingUser.setPincode(la.getPincode());
            
            // Update loan details
            existingUser.setLoanType(la.getLoanType());
            existingUser.setLoanAmount(la.getLoanAmount());
            existingUser.setPurpose(la.getPurpose());
            existingUser.setApplicationDate(la.getApplicationDate());
            existingUser.setNoOfInstallments(la.getNoOfInstallments());
            existingUser.setAmountPerMonth(la.getAmountPerMonth());
            
            // Update bank details
            existingUser.setBankName(la.getBankName());
            existingUser.setBranchName(la.getBranchName());
            existingUser.setIFSCCode(la.getIFSCCode());
            existingUser.setAccountType(la.getAccountType());
            existingUser.setAccountNumber(la.getAccountNumber());
            existingUser.setAccountHolderName(la.getAccountHolderName());
    
            return loanRepo.save(existingUser);
            
        } 
        
        else 
        {
            return null;
        }
    }	
	
	
	
	
	
	
	
	// ADMIN SIDE	 
	 
	 
	// Retrieve a specific loan application by ID
	public LoanApplication getLoanApplicationById(Long id)
	{
		Optional<LoanApplication> loan = loanRepo.findById(id);
		return loan.orElse(null);
	}
	
	
	
	// Retrieve a specific loan application by USER ID and ID
	public LoanApplication getLoanApplicationByUserIdAndId(Long userId, Long id)
	{
		Optional<LoanApplication> loan = loanRepo.findByUserIdAndId(userId, id);
		return loan.orElse(null);
	}
	
	
	// Retrieve a list of loan applications for a specific user
	public List<LoanApplication> getLoanApplicationsByUserId(Long userId)
	{
		List<LoanApplication> loan = loanRepo.findByUserId(userId);
		return loan;
	}
	
	
	 //Retrieve a list of loan applications with a specific status
	public List<LoanApplication> getLoanApplicationsByStatus(String status)
	{
		List<LoanApplication> loan = loanRepo.findByStatus(status);
		return loan;
	}
	
	
	// Update Loan Application Status for the user
	public LoanApplication updateLoanApplicationStatus(Long userId, Long id, LoanApplication la)
	{
		LoanApplication existingUser = loanRepo.findByUserIdAndId(userId,id).orElse(null);
		
		if (existingUser != null) 
        {
			
			//Updating Loan Application Status for the user
			existingUser.setStatus(la.getStatus());
            return loanRepo.save(existingUser);
            
        } 
        else 
        {
            return null;
        }
		
	}
	
}


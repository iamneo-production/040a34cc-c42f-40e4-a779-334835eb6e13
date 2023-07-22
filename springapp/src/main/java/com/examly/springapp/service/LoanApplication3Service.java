package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.loanPortalMain.model.LoanApplication3;
import com.project.loanPortalMain.repository.LoanApplication3Repository;

@Service
public class LoanApplication3Service {
	
	private final LoanApplication3Repository loan3Repo;

    @Autowired
    public LoanApplication3Service(LoanApplication3Repository loan3Repo) {
        this.loan3Repo=loan3Repo;
    }
	
	// Logic
	
	
	// USER SIDE
			
			
	// uploading the documents
	public LoanApplication3 saveImage(LoanApplication3 image) {
        return loan3Repo.save(image);
    }

	
	
	
	
	// ADMIN SIDE
	
	
	// Retrieve a specific image by IMAGE ID
    public LoanApplication3 getImageById(Long imageId) {
        return loan3Repo.findById(imageId)
                .orElseThrow(() -> new RuntimeException("Image not found with id: " + imageId));
    }
    
    
    // Retrieve a image by USER ID
    public LoanApplication3 getImageByUserId(Long userId) {
         return loan3Repo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Image not found with id: " + userId));
    }
    
    
    // Retrieve a image by USER ID AND LOAN ID
    public LoanApplication3 getImageByUserIdAndId(Long userId, Long id) {
        return loan3Repo.findByUserIdAndId(userId, id)
               .orElseThrow(() -> new RuntimeException("Image not found with id: " + userId +" and " + id));
   }

    
    // Retrieve a image by fileName
    public LoanApplication3 getImageByName(String name) {
        return loan3Repo.findByTenthMarksheetFileName(name)
                .orElseThrow(() -> new RuntimeException("Image not found with name: " + name));
    }

	
}


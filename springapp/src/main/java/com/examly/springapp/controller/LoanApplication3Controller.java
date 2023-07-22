package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.loanPortalMain.model.LoanApplication3;
import com.project.loanPortalMain.service.LoanApplication3Service;


@RestController
@RequestMapping("/image")
public class LoanApplication3Controller {
	
	private final LoanApplication3Service LAS;

    @Autowired
    public LoanApplication3Controller(LoanApplication3Service LAS) {
        this.LAS=LAS;
    }
	
	// Logic
	
	
	// USER SIDE
				
				
	// uploading the documents
	@PostMapping("/img/{userId}/{id}")
	public ResponseEntity<LoanApplication3> uploadImages(@RequestParam("file1") MultipartFile file1, @RequestParam("file2") MultipartFile file2, @RequestParam("file3") MultipartFile file3, @RequestParam("file4") MultipartFile file4, @RequestParam("file5") MultipartFile file5,
			                                             @RequestParam("file6") MultipartFile file6, @RequestParam("file7") MultipartFile file7, @RequestParam("file8") MultipartFile file8, @RequestParam("file9") MultipartFile file9, 
			                                             @PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
        	
            LoanApplication3 image = new LoanApplication3();
            
            image.setUserId(userId);
            image.setId(id);
            
            image.setTenthMarksheetFileName(file1.getOriginalFilename());
            image.setTenthMarksheet(file1.getBytes());
            
            image.setTwelvethMarksheetFileName(file2.getOriginalFilename());
            image.setTwelvethMarksheet(file2.getBytes());
            
            image.setProofOfAdmissionFileName(file3.getOriginalFilename());
            image.setProofOfAdmission(file3.getBytes());
            
            image.setLandRecordsFileName(file4.getOriginalFilename());
            image.setLandRecords(file4.getBytes());
            
            image.setApplicantsPhotoFileName(file5.getOriginalFilename());
            image.setApplicantsPhoto(file5.getBytes());
            
            image.setFeeStructureFileName(file6.getOriginalFilename());
            image.setFeeStructure(file6.getBytes());
            
            image.setAadharCardPhotoFileName(file7.getOriginalFilename());
            image.setAadharCardPhoto(file7.getBytes());
            
            image.setPanCardPhotoFileName(file8.getOriginalFilename());
            image.setPanCardPhoto(file8.getBytes());
            
            image.setProofOfIncomeFileName(file9.getOriginalFilename());
            image.setProofOfIncome(file9.getBytes());
            
            
            LoanApplication3 savedImage = LAS.saveImage(image);
            
            return ResponseEntity.status(HttpStatus.CREATED).body(savedImage);
            
        } catch (Exception e) {
        	
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            
        }
    }    
    

	
	
	
	
	
	
	
	
	// ADMIN SIDE
	
	
	
	// Retrieve a specific image by IMAGE ID
	@GetMapping("/{imageId}")
	public ResponseEntity<ByteArrayResource> getImageById(@PathVariable("imageId") Long imageId) {
        try {
            LoanApplication3 image = LAS.getImageById(imageId);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getTenthMarksheet().length);

            ByteArrayResource resource = new ByteArrayResource(image.getTenthMarksheet());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }    
	    
	    
	// Retrieve a image by USER ID
	@GetMapping("/img/{userId}")
	public ResponseEntity<ByteArrayResource> getImageByUserId(@PathVariable("userId") Long userId) {
        try {
            LoanApplication3 image = LAS.getImageByUserId(userId);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getTenthMarksheet().length);

            ByteArrayResource resource = new ByteArrayResource(image.getTenthMarksheet());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }   
	
	
	// Retrieve tenth marksheet by USER ID AND LOAN ID
	@GetMapping("/tenth/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage1ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getTenthMarksheet().length);

            ByteArrayResource resource = new ByteArrayResource(image.getTenthMarksheet());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }     
	
	
	// Retrieve twelveth marksheet by USER ID AND LOAN ID
	@GetMapping("/twelveth/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage2ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getTwelvethMarksheet().length);

            ByteArrayResource resource = new ByteArrayResource(image.getTwelvethMarksheet());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	// Retrieve Proof Of Admission by USER ID AND LOAN ID
	@GetMapping("/admission/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage3ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getProofOfAdmission().length);

            ByteArrayResource resource = new ByteArrayResource(image.getProofOfAdmission());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	// Retrieve land records by USER ID AND LOAN ID
	@GetMapping("/landRecords/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage4ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getLandRecords().length);

            ByteArrayResource resource = new ByteArrayResource(image.getLandRecords());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	// Retrieve Applicants Photo by USER ID AND LOAN ID
	@GetMapping("/applicantsPhoto/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage5ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getApplicantsPhoto().length);

            ByteArrayResource resource = new ByteArrayResource(image.getApplicantsPhoto());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

	
	// Retrieve Fee Structure by USER ID AND LOAN ID
	@GetMapping("/feeStructure/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage6ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getFeeStructure().length);

            ByteArrayResource resource = new ByteArrayResource(image.getFeeStructure());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	// Retrieve AadharCard Photo by USER ID AND LOAN ID
	@GetMapping("/aadharCardPhoto/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage7ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getAadharCardPhoto().length);

            ByteArrayResource resource = new ByteArrayResource(image.getAadharCardPhoto());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	// Retrieve PanCard Photo by USER ID AND LOAN ID
	@GetMapping("/panCardPhoto/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage8ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getPanCardPhoto().length);

            ByteArrayResource resource = new ByteArrayResource(image.getPanCardPhoto());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	// Retrieve Proof Of Income by USER ID AND LOAN ID
	@GetMapping("/income/{userId}/{id}")
	public ResponseEntity<ByteArrayResource> getImage9ByUserIdAndId(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
        try {
            LoanApplication3 image = LAS.getImageByUserIdAndId(userId, id);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getProofOfIncome().length);

            ByteArrayResource resource = new ByteArrayResource(image.getProofOfIncome());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
	
	    
	// Retrieve a image by filename   
	@GetMapping("/name/{name}")
	public ResponseEntity<ByteArrayResource> getImageByName(@PathVariable("name") String name) {
        try {
            LoanApplication3 image = LAS.getImageByName(name);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(image.getTenthMarksheet().length);

            ByteArrayResource resource = new ByteArrayResource(image.getTenthMarksheet());

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }    

}


package com.examly.springapp.service;

import java.io.IOException;
import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.examly.springapp.model.LoanApplication3;
import com.examly.springapp.model.LoanApplication;
import com.examly.springapp.repository.LoanApplication3Repository;

import javax.mail.MessagingException;

@Service
public class LoanApplication3Service {

	private final LoanApplication3Repository loan3Repo;

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	public LoanApplication3Service(LoanApplication3Repository loan3Repo) {
		this.loan3Repo = loan3Repo;
	}

	// Logic

	// USER SIDE

	// foreign key loan_id will be created
	public LoanApplication3 saveLoan3(LoanApplication3 image) {
		return loan3Repo.save(image);
	}

	// Uploading/Updating the documents for that particular loanid
	public LoanApplication3 saveImage(MultipartFile file1, MultipartFile file2, MultipartFile file3,
			MultipartFile file4, MultipartFile file5, MultipartFile file6, MultipartFile file7, MultipartFile file8,
			MultipartFile file9, MultipartFile file10, MultipartFile file11, Long userId, Long loanId)
			throws IOException,  MessagingException {
		Optional<LoanApplication3> loanApplication3Optional = loan3Repo.findByImageId(loanId);

		if (loanApplication3Optional.isPresent()) {
			LoanApplication3 image = loanApplication3Optional.get();
			LoanApplication3 data = loanApplication3Optional.get();
			sendEmail(data);
			image.setUserId(userId);

			// Set the fields for the files that are not null
			if (file1 != null) {
				image.setTenthMarksheetFileName(file1.getOriginalFilename());
				image.setTenthMarksheet(file1.getBytes());
			}

			if (file2 != null) {
				image.setTwelvethMarksheetFileName(file2.getOriginalFilename());
				image.setTwelvethMarksheet(file2.getBytes());
			}

			if (file3 != null) {
				image.setUnderGradMarksheetFileName(file3.getOriginalFilename());
				image.setUnderGradMarksheet(file3.getBytes());
			}

			if (file4 != null) {
				image.setProofOfAdmissionFileName(file4.getOriginalFilename());
				image.setProofOfAdmission(file4.getBytes());
			}

			if (file5 != null) {
				image.setLandRecordsFileName(file5.getOriginalFilename());
				image.setLandRecords(file5.getBytes());
			}

			if (file6 != null) {
				image.setApplicantsPhotoFileName(file6.getOriginalFilename());
				image.setApplicantsPhoto(file6.getBytes());
			}

			if (file7 != null) {
				image.setFeeStructureFileName(file7.getOriginalFilename());
				image.setFeeStructure(file7.getBytes());
			}

			if (file8 != null) {
				image.setAadharCardPhotoFileName(file8.getOriginalFilename());
				image.setAadharCardPhoto(file8.getBytes());
			}

			if (file9 != null) {
				image.setPanCardPhotoFileName(file9.getOriginalFilename());
				image.setPanCardPhoto(file9.getBytes());
			}

			if (file10 != null) {
				image.setProofOfIncomeFileName(file10.getOriginalFilename());
				image.setProofOfIncome(file10.getBytes());
			}

			if (file11 != null) {
				image.setDigitalSignatureFileName(file11.getOriginalFilename());
				image.setDigitalSignature(file11.getBytes());
			}

			return loan3Repo.save(image);
		} else {
			throw new IllegalArgumentException("LoanApplication with ID " + loanId + " not found");
		}
	}

        public void sendEmail(LoanApplication3 loan3) {
		String to = "";
		String fname = "";
		String lname = "";
		String url = "http://localhost:3000/profile";
		LoanApplication loan = loan3.getLoanApplication();
		to = loan.getEmailId();
		fname = loan.getFirstName();
		lname = loan.getLastName();
		String from = "virtusaeducationloanportal@gmail.com";
		String subject = " Loan Application Successfully Submitted - Check Your Application Status";
		String mailContent = "Dear " + fname + " " + lname + ",\n\nWe are writing to inform you that "
				+ "your loan application has been successfully submitted."
				+ "\n\nWe understand how important this step is for you, and we want to assure you that our team is"
				+ " now diligently reviewing your application to determine the best possible options tailored to your needs."
				+ "\nThe process may take a few business days, but we promise to keep you informed throughout the evaluation process."
				+ "\n\nTo check the status of your application, simply click on the link below: " + "\n\n" + url
				+ "\n\nBy clicking on the link, you will be directed to a secure page where you can view the real-time progress of your application.";

		mailContent += "\n\n\nBest regards,\nVirtusa Education Loan Portal";

		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.gmail.com");
		javaMailSender.setPort(587);
		javaMailSender.setUsername("virtusaeducationloanportal@gmail.com");
		javaMailSender.setPassword("kdnokjnsqimmvhxk");
		javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.enable", "true");
		mailSender = javaMailSender;

		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(from);
		message.setTo(to);
		message.setSubject(subject);
		message.setText(mailContent);
		mailSender.send(message);
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
	public LoanApplication3 getImageByUserIdAndId(Long userId, Long loanId) {
		return loan3Repo.findByUserIdAndImageId(userId, loanId)
				.orElseThrow(() -> new RuntimeException("Image not found with id: " + userId + " and " + loanId));
	}

	// Retrieve a image by fileName
	public LoanApplication3 getImageByName(String name) {
		return loan3Repo.findByTenthMarksheetFileName(name)
				.orElseThrow(() -> new RuntimeException("Image not found with name: " + name));
	}

	public List<LoanApplication3> getAllImages() {
		// TODO Auto-generated method stub
		return loan3Repo.findAll();
	}

}

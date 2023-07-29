package com.examly.springapp.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.PaymentHistory;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.PaymentHistoryRepository;
import com.examly.springapp.repository.LoanStatusRepository;
import com.examly.springapp.service.LoanStatusService;
import com.examly.springapp.repository.UserRepository;

import javax.mail.MessagingException;

import com.examly.springapp.model.LoanStatus;


@Service
public class PaymentHistoryServiceImpl implements PaymentHistoryService{
	
	@Autowired
	private PaymentHistoryRepository paymentHistoryRepository;
	
	//@Autowired 
	private JavaMailSender mailSender;
	
	@Autowired
	private LoanStatusService loanStatusService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private LoanStatusRepository loanStatusRepository;
	
	LoanStatus loanStatus;
	
	User user;
	
	@Override
	public void addPaymentHistory(PaymentHistory paymentHistory) throws MessagingException {
		loanStatus=loanStatusRepository.findByUserId(paymentHistory.getUserId());
		double penalty=0;
		if(!loanStatusService.isPaymentHistoryLate(loanStatus.getLoanNextDueDate())) {
			penalty=paymentHistory.getAmount()*0.05;
		}
		if(!loanStatusService.isPaymentHistoryRight(paymentHistory.getAmount(), loanStatus.getEMI())) {
			penalty=paymentHistory.getAmount()*0.05;
		}
		paymentHistory.setPenaltyAmount(penalty);
		paymentHistory.setForLoan(paymentHistory.getAmount()-penalty);
		paymentHistory.setPaymentDate(LocalDate.now());
		paymentHistory.setPaymentTime(LocalTime.now());
		paymentHistoryRepository.save(paymentHistory);
		loanStatusService.updateUserDetails(paymentHistory);
		sendEmail(paymentHistory);	
	}

	@Override
	public void sendEmail(PaymentHistory paymentHistory) {
		
		// user=userRepository.findById(paymentHistory.getUserId());
		String from="virtusaeducationloanStatusportal@gmail.com";
		String to=user.getEmail();
		String subject="PaymentHistory Successfull - Receipt";
		String mailContent="Dear "+user.getEmail()+",\n\n We are writing to inform you that "
				+ "your recent paymentHistory has been successfullly processed. We appreciate"
				+ " your prompt action in fulfilling your financial obligation."
				+ "\n\nPaymentHistory Details:\n\npaymentHistory Date : "+paymentHistory.getPaymentDate()+
				"\nPaymentHistory Method : "+paymentHistory.getPaymentMethod()+"\nTransaction iD : "+
				paymentHistory.getTransactionId()+"\nPaid Amount : "+paymentHistory.getAmount()+
				"\n\n\n";
		loanStatus=loanStatusRepository.findByUserId(paymentHistory.getUserId());
		double penaltyLate=0;
		double penaltyEMI=0;
		if(!loanStatusService.isPaymentHistoryLate(loanStatus.getLoanNextDueDate())) {
			penaltyLate=paymentHistory.getAmount()*0.05;
			mailContent+="Penalty Amount : "+penaltyLate+"\n(For Late PaymentHistory)\n";
		}
		if(!loanStatusService.isPaymentHistoryRight(paymentHistory.getAmount(), loanStatus.getEMI())) {
			penaltyEMI=paymentHistory.getAmount()*0.05;
			mailContent+="Penalty Amount : "+penaltyEMI+"\n(For PaymentHistory Amount Lesser Than EMI)\n\n\n";
		}
		mailContent+="LoanStatus Repay Amount : "+(paymentHistory.getAmount()-penaltyLate-penaltyEMI)+"\nPenalty Amount : "+
				(penaltyLate+penaltyEMI)+"\n\n\nBest regards,\nVirtusa Education LoanStatus Portal";
		
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.gmail.com");
		javaMailSender.setPort(587);
		javaMailSender.setUsername("virtusaeducationloanStatusportal@gmail.com");
		javaMailSender.setPassword("kdnokjnsqimmvhxk");
		javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.enable", "true");
		mailSender=javaMailSender;
		
		SimpleMailMessage message=new SimpleMailMessage();
		message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(mailContent);
        mailSender.send(message);
	}
}

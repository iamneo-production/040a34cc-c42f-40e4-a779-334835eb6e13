package com.examly.springapp.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payment;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.PaymentRepository;
import com.examly.springapp.repository.LoanRepository;
import com.examly.springapp.repository.UserRepository;

import javax.mail.MessagingException;

import com.examly.springapp.model.Loan;


@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	//@Autowired 
	private JavaMailSender mailSender;
	
	@Autowired
	private LoanService loanService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private LoanRepository loanRepository;
	
	Loan loan;
	
	User user;
	
	@Override
	public void addPayment(Payment payment) throws MessagingException {
		loan=loanRepository.findByUserId(payment.getUserId());
		double penalty=0;
		if(!loanService.isPaymentLate(loan.getLoanNextDueDate())) {
			penalty=payment.getAmount()*0.05;
		}
		if(!loanService.isPaymentRight(payment.getAmount(), loan.getEMI())) {
			penalty=payment.getAmount()*0.05;
		}
		payment.setPenaltyAmount(penalty);
		payment.setForLoan(payment.getAmount()-penalty);
		payment.setPaymentDate(LocalDate.now());
		payment.setPaymentTime(LocalTime.now());
		paymentRepository.save(payment);
		loanService.updateUserDetails(payment);
		sendEmail(payment);	
	}

	@Override
	public void sendEmail(Payment payment) {
		
		// user=userRepository.findById(payment.getUserId());
		String from="virtusaeducationloanportal@gmail.com";
		String to=user.getEmail();
		String subject="Payment Successfull - Receipt";
		String mailContent="Dear "+user.getEmail()+",\n\n We are writing to inform you that "
				+ "your recent payment has been successfullly processed. We appreciate"
				+ " your prompt action in fulfilling your financial obligation."
				+ "\n\nPayment Details:\n\npayment Date : "+payment.getPaymentDate()+
				"\nPayment Method : "+payment.getPaymentMethod()+"\nTransaction iD : "+
				payment.getTransactionId()+"\nPaid Amount : "+payment.getAmount()+
				"\n\n\n";
		loan=loanRepository.findByUserId(payment.getUserId());
		double penaltyLate=0;
		double penaltyEMI=0;
		if(!loanService.isPaymentLate(loan.getLoanNextDueDate())) {
			penaltyLate=payment.getAmount()*0.05;
			mailContent+="Penalty Amount : "+penaltyLate+"\n(For Late Payment)\n";
		}
		if(!loanService.isPaymentRight(payment.getAmount(), loan.getEMI())) {
			penaltyEMI=payment.getAmount()*0.05;
			mailContent+="Penalty Amount : "+penaltyEMI+"\n(For Payment Amount Lesser Than EMI)\n\n\n";
		}
		mailContent+="Loan Repay Amount : "+(payment.getAmount()-penaltyLate-penaltyEMI)+"\nPenalty Amount : "+
				(penaltyLate+penaltyEMI)+"\n\n\nBest regards,\nVirtusa Education Loan Portal";
		
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.gmail.com");
		javaMailSender.setPort(587);
		javaMailSender.setUsername("virtusaeducationloanportal@gmail.com");
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

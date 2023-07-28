package com.examly.springapp.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payment;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.PaymentRepository;
import com.examly.springapp.repository.UserLoanRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.service.PaymentService;
import com.examly.springapp.service.UserLoanService;

import javax.mail.MessagingException;

import com.examly.springapp.model.UserLoans;


@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired 
	private JavaMailSender mailSender;
	
	@Autowired
	private UserLoanService userLoanService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserLoanRepository userLoanRepository;
	
	UserLoans userLoan;
	
	Optional<User> user;
	
	@Override
	public void addPayment(Payment payment) throws MessagingException {
		userLoan=userLoanRepository.findByUserId(payment.getUserId());
		user=userRepository.findById(payment.getUserId());
		payment.setPaymentDate(LocalDate.now());
		payment.setPaymentTime(LocalTime.now());
		payment.setName(user.get().getFirstName());
		payment.setEmail(user.get().getEmail());
		double amount=payment.getAmount();
		String formatAmount=String.format("%.2f",amount);
		payment.setAmount(Double.parseDouble(formatAmount));
		paymentRepository.save(payment);
		userLoanService.updateUserDetails(payment);
		sendEmail(payment);	
	}

	@Override
	public void sendEmail(Payment payment) {
		
		user=userRepository.findById(payment.getUserId());
		String to="";
		String name="";
		if(user.isPresent()) {
			User directUser=user.get();
			to=directUser.getEmail();
			name=directUser.getFirstName();
		}
		String from="virtusaeducationloanportal@gmail.com";
		String subject="Payment Successfull - Receipt";
		String mailContent="Dear "+name+",\n\nWe are writing to inform you that "
				+ "your recent payment has been successfullly processed. We appreciate"
				+ " your prompt action in fulfilling your financial obligation."
				+ "\n\nPayment Details:\n\npayment Date : "+payment.getPaymentDate()+
				"\nPayment Method : "+payment.getPaymentMethod()+"\nTransaction iD : "+
				"\nPaid Amount : "+payment.getAmount()+
				"\n\n\n";
		userLoan=userLoanRepository.findByUserId(payment.getUserId());
		
		mailContent+="\n\n\nBest regards,\nVirtusa Education Loan Portal";
		
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

	@Override
	public List<Payment> getPayment(long id) {
		return paymentRepository.findAllByUserId(id);
	}

	@Override
	public List<Payment> getAllPayment() {
		return paymentRepository.findAll();
	}
}

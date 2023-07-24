package com.examly.springapp.service.impl;

import java.util.List;
import java.util.Optional;
import java.time.LocalDate;
import java.time.Period;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Loan;
import com.examly.springapp.model.Payment;
import com.examly.springapp.model.User;
import com.examly.springapp.model.UserLoans;
import com.examly.springapp.repository.LoanRepository;
import com.examly.springapp.repository.UserLoanRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.service.NotificationService;
import com.examly.springapp.service.UserLoanService;
import com.examly.springapp.model.Notification;


import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;

import com.examly.springapp.exception.*;

@Service
public class UserLoanServiceImpl implements UserLoanService{
	
	@Autowired
	private UserLoanRepository userLoanRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private LoanRepository loanRepository;
	
	@Autowired
	private NotificationService notificationService;
	
	
	private UserLoans userLoans;
	
	private Optional<User> user;
	
	private Optional<Loan> loan;

	@Override
	public UserLoans getUserDetails(long id) {
		try {
			return userLoanRepository.findByUserId(id);
		}
		catch(Exception e) {
			throw new UserNotFoundException("User Not Found!! Enter Valid User!!",e);
		}
	}

	@Override
	public void updateUserDetails(Payment payment) throws MessagingException {
		userLoans=userLoanRepository.findByUserId(payment.getUserId());
		userLoans.setNoOfPayments(userLoans.getNoOfPayments()+1);
		double paymentAmount=payment.getAmount();
		userLoans.setTotalAmountRepaid(paymentAmount+userLoans.getTotalAmountRepaid());
		double remainingInterestAmount=userLoans.getInterestAmount()-userLoans.getInterestAmountPaid();
		if(paymentAmount>=remainingInterestAmount) {
			userLoans.setInterestAmountPaid(userLoans.getInterestAmount());
			paymentAmount-=remainingInterestAmount;
			userLoans.setPrincipalAmountPaid(paymentAmount+userLoans.getPrincipalAmountPaid());
		}
		else {
			userLoans.setInterestAmountPaid(userLoans.getInterestAmountPaid()+paymentAmount);
		}
		LocalDate updatedNextDueDate=calculateNextDueDate(userLoans.getLoanNextDueDate());
		userLoans.setLoanNextDueDate(updatedNextDueDate);
		userLoanRepository.save(userLoans);
		if(userLoans.getPrincipalAmountPaid()==userLoans.getPrincipalAmount()) {
			sendLoanCompletionMail(payment.getUserId());
		}
		
	}

	@Override
	public void addUserLoan(UserLoans userLoan) {
		loan=loanRepository.findById(userLoan.getLoanId());
		userLoan.setInterestRate(loan.get().getInterest());
		userLoan.setLoanName(loan.get().getName());
		double EMI=calculateEMI(
				userLoan.getLoanAmount(),
				userLoan.getInterestRate(), 
				userLoan.getLoanTenure()*12);
		double interestAmount=(EMI*(userLoan.getLoanTenure()*12))-userLoan.getLoanAmount();
		userLoan.setEMI(Double.parseDouble(String.format("%.2f",EMI)));
		userLoan.setInterestAmount(Double.parseDouble(String.format("%.2f",interestAmount)));
		userLoan.setPrincipalAmount(Double.parseDouble(String.format("%.2f",userLoan.getLoanAmount())));
		userLoanRepository.save(userLoan);		
	}
	@Override
	public double calculateEMI(double principalAmount, double interestRate, int loanTenure) {
		// TODO Auto-generated method stub
		double monthlyInterestRate=interestRate/(12*100);
		double numerator=principalAmount*monthlyInterestRate*Math.pow(1+monthlyInterestRate,loanTenure);
		double denominator=Math.pow(1+monthlyInterestRate, loanTenure)-1;
		double emi=numerator/denominator;
		return emi;
	}

	@Override
	public double calculatePenalty(double paymentAmount) {
		// TODO Auto-generated method stub
		return paymentAmount*0.05;
	}

	@Override
	public boolean isPaymentLate(LocalDate dueDate) {
		// TODO Auto-generated method stub
		LocalDate currentDate=LocalDate.now();
		return !currentDate.isAfter(dueDate);
	}

	@Override
	public boolean isPaymentRight(double paymentAmount,double emi) {
		// TODO Auto-generated method stub
		return paymentAmount>=emi;
	}

	@Override
	public LocalDate calculateNextDueDate(LocalDate previousNextDueDate) {
		// TODO Auto-generated method stub
		return previousNextDueDate.plusMonths(1);
	}

	@Override
	public void sendLoanCompletionMail(long id) throws MessagingException {
		// TODO Auto-generated method stub
		user=userRepository.findById(id);
		userLoanRepository.deleteByUserId(id);
		String to="";
		String name="";
		if(user.isPresent()) {
			User directUser=user.get();
			to=directUser.getEmail();
			name=directUser.getFirstName();
		}
		userLoans=userLoanRepository.findByUserId(id);
		String from="virtusaeducationloanportal@gmail.com";
		String subject="Education Loan Successfully Completed - Congratulations!";
		String mailContent="Dear "+name+",\nWe are pleased to inform you "
				+ "that your education loan has been successfully paid off. Thank you for "
				+ "your prompt repayments.\n<h3>Loan Details :</h3><h3>Loan Id :"+
				userLoans.getLoanId()+"</h3><h3>Principal Amount : "+userLoans.getLoanAmount()+
				"</h3><h3>Interest Rate : "+userLoans.getInterestAmount()+"</h3><h3>Loan Tenure : "+
				userLoans.getLoanTenure()+"</h3></br><b>Once again, congratulations on successfully "
						+ "completing your education loan. We wish you all the best in your future "
						+ "endeavors and hope that this loan has contributed to your academic and "
						+ "professional growth.</b></br></br><p>Thank you for choosing Virtusa "
						+ "Education Loan Portal as you trusted financial partner. We value your "
						+ "association with us.</p></br>\n\nBest regards,</br>\nVirtusa Education Loan Portal";
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.gmail.com");
		javaMailSender.setPort(587);
		javaMailSender.setUsername("virtusaeducationloanportal@gmail.com");
		javaMailSender.setPassword("kdnokjnsqimmvhxk");
		javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.enable", "true");
		mailSender=javaMailSender;
		MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message,true);
        messageHelper.setFrom(from);
        messageHelper.setTo(to);
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent,true);
        System.out.println(messageHelper);
        mailSender.send(message);
	}

	@Override
	public void approveLoan(Long userId) throws MessagingException {
		// TODO Auto-generated method stub
		userLoans=userLoanRepository.findByUserId(userId);
		userLoans.setLoanStatus("Approved");
		LocalDate startDate,endDate,nextDueDate;
		if(userLoans.getLoanName().equals("Education loan")) {
			startDate=LocalDate.now().plusYears(userLoans.getEducationPeriod()+1);
		}
		else {
			startDate=LocalDate.now().plusMonths(1);
		}
		endDate=startDate.plusYears(userLoans.getLoanTenure());
		nextDueDate=startDate.plusMonths(1);
		userLoans.setLoanStartDate(startDate);
		userLoans.setLoanEndDate(endDate);
		userLoans.setLoanNextDueDate(nextDueDate);
		userLoanRepository.save(userLoans);
		user=userRepository.findById(userId);
		String to=user.get().getEmail();
		String subject="Congratulations! Your Loan Has Been Approved";
		String content="Dear "+user.get().getFirstName()+",</br>\nWe are pleased to inform you that your "
				+ "loan application has been Approved!</br>\n\nHere are the details of your "
				+ "approved loan:</br>\nLoan Amount"+userLoans.getLoanAmount()+"</br>\nInterest Rate: "
				+ ""+userLoans.getInterestRate()+"</br>\nLoan Term: "+userLoans.getLoanTenure()+
				"</br>\nMonthly EMI: "+Double.parseDouble(String.format("%.2f",userLoans.getEMI()))+"</br>\n\nCongratulations again, and we wish you "
					+ "all the best with your future endeavors!</br>\n\nBest regards,</br>\nVirtusa Education "
						+ "Loan Portal";
		Notification notification=new Notification();
		notification.setUserId(userId);
		notification.setMessage(content);
		notification.setSubject(subject);
		notificationService.addNotification(notification);
		sendLoanAcceptOrRejectMail(to,subject,content);
	}

	private void sendLoanAcceptOrRejectMail(String to, String subject, String content)throws MessagingException {
		// TODO Auto-generated method stub
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.gmail.com");
		javaMailSender.setPort(587);
		javaMailSender.setUsername("virtusaeducationloanportal@gmail.com");
		javaMailSender.setPassword("kdnokjnsqimmvhxk");
		javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.enable", "true");
		mailSender=javaMailSender;
		MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message,true);
        messageHelper.setFrom("virtusaeducationloanportal@gmail.com");
        messageHelper.setTo(to);
        messageHelper.setSubject(subject);
        messageHelper.setText(content,true);
        System.out.println(messageHelper);
        mailSender.send(message);
		
	}

	@Override
	public String deleteLoan(Long id) throws MessagingException {
		// TODO Auto-generated method stub
		userLoanRepository.deleteByUserId(id);
		user=userRepository.findById(id);
		String to=user.get().getEmail();
		String subject="Loan Application Status";
		String content="Dear "+user.get().getFirstName()+",</br>\nWe regret to inform you that your "
				+ "loan application has been declined.</br>\n\nThank you for considering us for your "
				+ "financial needs.</br>\n\nBest regards,</br>\nVirtusa Education Loan Portal";
		sendLoanAcceptOrRejectMail(to,subject,content);
		Notification notification=new Notification();
		notification.setUserId(id);
		notification.setMessage(content);
		notification.setSubject(subject);
		notificationService.addNotification(notification);
		return "deleted";
	}
	
}

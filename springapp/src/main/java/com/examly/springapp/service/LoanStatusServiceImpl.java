package com.examly.springapp.service;

import java.util.List;
import java.time.LocalDate;
import java.time.Period;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.PaymentHistory;
import com.examly.springapp.model.User;
import com.examly.springapp.model.LoanStatus;
import com.examly.springapp.repository.PaymentHistoryRepository;
import com.examly.springapp.repository.LoanStatusRepository;
import com.examly.springapp.repository.UserRepository;


import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;

import com.examly.springapp.exception.*;

@Service
public class LoanStatusServiceImpl implements LoanStatusService{
	
	@Autowired
	private LoanStatusRepository loanStatusRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	//@Autowired
	private JavaMailSender mailSender;
	
	private LoanStatus loanStatus;
	
	private User user;

	@Override
	public List<LoanStatus> getLoanStatusDetails(long id) throws Exception {	
		try {
			return loanStatusRepository.findByLoanId(id);
		}
		catch(Exception e){
			throw new LoanNotFoundException("LoanStatus Not Found!! Enter Valid LoanStatus!!",e);
		}
	}

	@Override
	public LoanStatus getUserDetails(long id) {
		try {
			return loanStatusRepository.findByUserId(id);
		}
		catch(Exception e) {
			throw new UserNotFoundException("User Not Found!! Enter Valid User!!",e);
		}
	}

	@Override
	public List<LoanStatus> getAllUserLoanStatusDetails() {
		return loanStatusRepository.findAll();
	}

	@Override
	public void updateUserDetails(PaymentHistory paymentHistory) throws MessagingException {
		loanStatus=loanStatusRepository.findByUserId(paymentHistory.getUserId());
		double paymentHistoryAmount=paymentHistory.getAmount();
		double penaltyAmount=0;
		if(!isPaymentHistoryLate(loanStatus.getLoanNextDueDate())) {
			penaltyAmount+=calculatePenalty(paymentHistoryAmount);
		}
		if(!isPaymentHistoryRight(paymentHistoryAmount,loanStatus.getEMI())) {
			penaltyAmount+=calculatePenalty(paymentHistoryAmount);
		}
		paymentHistoryAmount=paymentHistoryAmount-penaltyAmount;
		loanStatus.setTotalAmountRepaid(paymentHistoryAmount+loanStatus.getTotalAmountRepaid());
		loanStatus.setPenalties(loanStatus.getPenalties()+penaltyAmount);
		double remainingInterestAmount=loanStatus.getInterestAmount()-loanStatus.getInterestAmountPaid();
		if(paymentHistoryAmount>=remainingInterestAmount) {
			loanStatus.setInterestAmountPaid(loanStatus.getInterestAmount());
			paymentHistoryAmount-=remainingInterestAmount;
			loanStatus.setPrincipalAmountPaid(paymentHistoryAmount+loanStatus.getPrincipalAmountPaid());
		}
		else {
			loanStatus.setInterestAmountPaid(loanStatus.getInterestAmountPaid()+paymentHistoryAmount);
		}
		LocalDate updatedNextDueDate=calculateNextDueDate(loanStatus.getLoanNextDueDate());
		loanStatus.setLoanNextDueDate(updatedNextDueDate);
		loanStatusRepository.save(loanStatus);
		if(loanStatus.getPrincipalAmountPaid()==loanStatus.getPrincipalAmount()) {
			sendLoanStatusCompletionMail(paymentHistory.getUserId());
		}
		
	}

	@Override
	public void addUserLoanStatus(LoanStatus loanStatus) {
		loanStatus.setLoanTenure(4);
		double EMI=calculateEMI(
				loanStatus.getLoanAmount(),
				loanStatus.getInterestRate(), 
				loanStatus.getLoanTenure()*12);
		double interestAmount=(EMI*(loanStatus.getLoanTenure()*12))-loanStatus.getPrincipalAmount();
		loanStatus.setEMI(EMI);
		loanStatus.setInterestAmount(interestAmount);
		loanStatus.setPrincipalAmount(loanStatus.getLoanAmount());
		loanStatusRepository.save(loanStatus);		
	}
	@Override
	public double calculateEMI(double principalAmount, double interestRate, int loanTenure) {
		
		double monthlyInterestRate=interestRate/(12*100);
		double numerator=principalAmount*monthlyInterestRate*Math.pow(1+monthlyInterestRate,loanTenure);
		double denominator=Math.pow(1+monthlyInterestRate, loanTenure)-1;
		return numerator/denominator;
	}

	@Override
	public double calculatePenalty(double paymentHistoryAmount) {
		return paymentHistoryAmount*0.05;
	}


	@Override
	public boolean isPaymentHistoryLate(LocalDate dueDate) {	
		LocalDate currentDate=LocalDate.now();
		return !currentDate.isAfter(dueDate);
	}

	@Override
	public boolean isPaymentHistoryRight(double paymentHistoryAmount,double emi) {
		return paymentHistoryAmount>=emi;
	}

	@Override
	public LocalDate calculateNextDueDate(LocalDate previousNextDueDate) {
		return previousNextDueDate.plusMonths(1);
	}

	@Override
	public void sendLoanStatusCompletionMail(long id) throws MessagingException {
	    // user=userRepository.findById(id);
		loanStatus=loanStatusRepository.findByUserId(id);
		String from="virtusaeducationloanStatusportal@gmail.com";
		String to=user.getEmail();
		String subject="Education LoanStatus Successfully Completed - Congratulations!";
		String mailContent="Dear "+user.getEmail()+",\n We are pleased to inform you "
				+ "that your education loanStatus has been successfully paid off. Thank you for "
				+ "your prompt repaymentHistorys.\n<h3>LoanStatus Details :</h3><h3>LoanStatus Id :"+
				loanStatus.getLoanId()+"</h3><h3>Principal Amount : "+loanStatus.getLoanAmount()+
				"</h3><h3>Interest Rate : "+loanStatus.getInterestAmount()+"</h3><h3>LoanStatus Tenure : "+
				loanStatus.getLoanTenure()+"</h3></br><b>Once again, congratulations on successfully "
						+ "completing your education loanStatus. We wish you all the best in your future "
						+ "endeavors and hope that this loanStatus has contributed to your academic and "
						+ "professional growth.</b></br></br><p>Thank you for choosing Virtusa "
						+ "Education LoanStatus Portal as you trusted financial partner. We value your "
						+ "association with us.</p></br>\n\nBest regards,</br>\nVirtusa Education LoanStatus Portal";
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.gmail.com");
		javaMailSender.setPort(587);
		javaMailSender.setUsername("virtusaeducationloanStatusportal@gmail.com");
		javaMailSender.setPassword("kdnokjnsqimmvhxk");
		javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.enable", "true");
		mailSender=javaMailSender;
		MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message,true);
        messageHelper.setFrom(from);
        messageHelper.setTo(to);
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent,true);
        mailSender.send(message);
	}

	@Override
	public void approveLoanStatus(Long userId, Long loanStatusId) {
		
		loanStatus=loanStatusRepository.findByUserIdAndLoanId(userId,loanStatusId);
		loanStatus.setStatus("Approved");
		LocalDate startDate;
        LocalDate endDate;
        LocalDate nextDueDate;
		if(loanStatus.getLoanName().equals("Education loanStatus")) {
			startDate=LocalDate.now().plusYears(loanStatus.getEducationPeriod()+1);
		}
		else {
			startDate=LocalDate.now().plusMonths(1);
		}
		endDate=startDate.plusYears(loanStatus.getLoanTenure());
		nextDueDate=startDate.plusMonths(1);
		loanStatus.setStartDate(startDate);
		loanStatus.setEndDate(endDate);
		loanStatus.setLoanNextDueDate(nextDueDate);
		loanStatusRepository.save(loanStatus);
	}
	
}

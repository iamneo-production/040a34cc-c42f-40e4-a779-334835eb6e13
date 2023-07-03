package main.java.com.examly.springapp.service;

import java.util.List;
import java.time.LocalDate;
import java.time.Period;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import main.java.com.examly.springapp.model.Payment;
import main.java.com.examly.springapp.model.User;
import main.java.com.examly.springapp.model.Loan;
import main.java.com.examly.springapp.repository.PaymentRepository;
import main.java.com.examly.springapp.repository.LoanRepository;
import main.java.com.examly.springapp.repository.UserRepository;


import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;

import main.java.com.examly.springapp.Exception.*;

@Service
public class LoanServiceImpl implements LoanService{
	
	@Autowired
	private LoanRepository loanRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	//@Autowired
	private JavaMailSender mailSender;
	
	private Loan loan;
	
	private User user;

	@Override
	public List<Loan> getLoanDetails(long id) throws Exception {	
		try {
			return loanRepository.findByLoanId(id);
		}
		catch(Exception e){
			throw new LoanNotFoundException("Loan Not Found!! Enter Valid Loan!!",e);
		}
	}

	@Override
	public Loan getUserDetails(long id) {
		try {
			return loanRepository.findByUserId(id);
		}
		catch(Exception e) {
			throw new UserNotFoundException("User Not Found!! Enter Valid User!!",e);
		}
	}

	@Override
	public List<Loan> getAllUserLoanDetails() {
		return loanRepository.findAll();
	}

	@Override
	public void updateUserDetails(Payment payment) throws MessagingException {
		loan=loanRepository.findByUserId(payment.getUserId());
		double paymentAmount=payment.getAmount();
		double penaltyAmount=0;
		if(!isPaymentLate(loan.getLoanNextDueDate())) {
			penaltyAmount+=calculatePenalty(paymentAmount);
		}
		if(!isPaymentRight(paymentAmount,loan.getEMI())) {
			penaltyAmount+=calculatePenalty(paymentAmount);
		}
		paymentAmount=paymentAmount-penaltyAmount;
		loan.setTotalAmountRepaid(paymentAmount+loan.getTotalAmountRepaid());
		loan.setPenalties(loan.getPenalties()+penaltyAmount);
		double remainingInterestAmount=loan.getInterestAmount()-loan.getInterestAmountPaid();
		if(paymentAmount>=remainingInterestAmount) {
			loan.setInterestAmountPaid(loan.getInterestAmount());
			paymentAmount-=remainingInterestAmount;
			loan.setPrincipalAmountPaid(paymentAmount+loan.getPrincipalAmountPaid());
		}
		else {
			loan.setInterestAmountPaid(loan.getInterestAmountPaid()+paymentAmount);
		}
		LocalDate updatedNextDueDate=calculateNextDueDate(loan.getLoanNextDueDate());
		loan.setLoanNextDueDate(updatedNextDueDate);
		loanRepository.save(loan);
		if(loan.getPrincipalAmountPaid()==loan.getPrincipalAmount()) {
			sendLoanCompletionMail(payment.getUserId());
		}
		
	}

	@Override
	public void addUserLoan(Loan loan) {
		double EMI=calculateEMI(
				loan.getLoanAmount(),
				loan.getInterestRate(), 
				loan.getLoanTenure()*12);
		double interestAmount=(EMI*(loan.getLoanTenure()*12))-loan.getPrincipalAmount();
		loan.setEMI(EMI);
		loan.setInterestAmount(interestAmount);
		loan.setPrincipalAmount(loan.getLoanAmount());
		loanRepository.save(loan);		
	}
	@Override
	public double calculateEMI(double principalAmount, double interestRate, int loanTenure) {
		
		double monthlyInterestRate=interestRate/(12*100);
		double numerator=principalAmount*monthlyInterestRate*Math.pow(1+monthlyInterestRate,loanTenure);
		double denominator=Math.pow(1+monthlyInterestRate, loanTenure)-1;
		return numerator/denominator;
	}

	@Override
	public double calculatePenalty(double paymentAmount) {
		return paymentAmount*0.05;
	}


	@Override
	public boolean isPaymentLate(LocalDate dueDate) {	
		LocalDate currentDate=LocalDate.now();
		return !currentDate.isAfter(dueDate);
	}

	@Override
	public boolean isPaymentRight(double paymentAmount,double emi) {
		return paymentAmount>=emi;
	}

	@Override
	public LocalDate calculateNextDueDate(LocalDate previousNextDueDate) {
		return previousNextDueDate.plusMonths(1);
	}

	@Override
	public void sendLoanCompletionMail(long id) throws MessagingException {
		user=userRepository.findByUserId(id);
		loan=loanRepository.findByUserId(id);
		String from="virtusaeducationloanportal@gmail.com";
		String to=user.getEmail();
		String subject="Education Loan Successfully Completed - Congratulations!";
		String mailContent="Dear "+user.getUserName()+",\nWe are pleased to inform you "
				+ "that your education loan has been successfully paid off. Thank you for "
				+ "your prompt repayments.\n<h3>Loan Details :</h3><h3>Loan Id :"+
				loan.getLoanId()+"</h3><h3>Principal Amount : "+loan.getLoanAmount()+
				"</h3><h3>Interest Rate : "+loan.getInterestAmount()+"</h3><h3>Loan Tenure : "+
				loan.getLoanTenure()+"</h3></br><b>Once again, congratulations on successfully "
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
        mailSender.send(message);
	}

	@Override
	public void approveLoan(Long userId, Long loanId) {
		
		loan=loanRepository.findByUserIdAndLoanId(userId,loanId);
		loan.setStatus("Approved");
		LocalDate startDate;
        LocalDate endDate;
        LocalDate nextDueDate;
		if(loan.getLoanName().equals("Education loan")) {
			startDate=LocalDate.now().plusYears(loan.getEducationPeriod()+1);
		}
		else {
			startDate=LocalDate.now().plusMonths(1);
		}
		endDate=startDate.plusYears(loan.getLoanTenure());
		nextDueDate=startDate.plusMonths(1);
		loan.setStartDate(startDate);
		loan.setEndDate(endDate);
		loan.setLoanNextDueDate(nextDueDate);
		loanRepository.save(loan);
	}
	
}

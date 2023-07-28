package com.examly.springapp.event.listener;


import com.examly.springapp.model.User;
import com.examly.springapp.event.RegistrationCompleteEvent;
import com.examly.springapp.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class RegistrationCompleteEventListener implements ApplicationListener<RegistrationCompleteEvent> {
	@Autowired
	private UserServiceImpl userService;
	@Autowired
    private JavaMailSender mailSender;

	@Autowired
    private HttpServletRequest request;
    private  User theUser;

    
    @Override
    public void onApplicationEvent(RegistrationCompleteEvent event) {

        theUser = event.getUser();

        String verificationToken = UUID.randomUUID().toString();

        userService.saveUserVerificationToken(theUser, verificationToken);

        String url = event.getApplicationUrl()+"/register/verifyEmail?token="+verificationToken;

        try {
            sendVerificationEmail(url);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        //log.info("Click the link to verify your registration :  {}", url);
    }

    public void sendVerificationEmail(String url) throws MessagingException, UnsupportedEncodingException {

        String subject = "Email Verification";
        String senderName = "Virtusa Education loan Portal Service";
        String mailContent = "<p> Hi, "+ theUser.getFirstName()+ ", </p>"+
                "<p>Thank you for registering with us,"+"" +
                "Please, click the link below to complete your registration.</p>"+
                "<a href=\"" +url+ "\">Verify your email to activate your account</a>"+
                "<p> Thank you <br> Virtusa Education loan Portal Service";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("virtusaeducationloanportal@gmail.com", senderName);
        messageHelper.setTo(theUser.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }



}

package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.service.impl.PasswordResetTokenService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;


@Controller
@RequestMapping("/register")
public class PasswordController {

    private final PasswordResetTokenService passwordResetTokenService;

    public PasswordController(PasswordResetTokenService passwordResetTokenService) {
        this.passwordResetTokenService = passwordResetTokenService;
    }


    @GetMapping("/reset-password")
    public String passwordResetFrom(@RequestParam("token") String token, Model model){
        model.addAttribute("token",token);
        return "password";
    }

    @PostMapping("/reset-password")
    public String resetPassword(HttpServletRequest request){
        String theToken = request.getParameter("token");
        String password = request.getParameter("password");
        String tokenVerificationResult = passwordResetTokenService.validatePasswordResetToken(theToken);
        if (!tokenVerificationResult.equalsIgnoreCase("valid")){
            return "error in token";
        }
        Optional<User> theUser = passwordResetTokenService.findUserByPasswordResetToken(theToken);
        if (theUser.isPresent()){
            passwordResetTokenService.resetPassword(theUser.get(), password);
            return "password-success";
        }
        return "not_found";
    }
}

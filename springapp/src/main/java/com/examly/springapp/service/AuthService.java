package com.examly.springapp.service;


import com.examly.springapp.payload.LoginDto;
import com.examly.springapp.payload.RegisterDto;

public interface AuthService {
    String login(LoginDto loginDto);

    String register(RegisterDto registerDto);
}

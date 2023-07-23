package com.examly.springapp.service;


import com.examly.springapp.payload.LoginDto;

public interface AuthService {
    String login(LoginDto loginDto);

}

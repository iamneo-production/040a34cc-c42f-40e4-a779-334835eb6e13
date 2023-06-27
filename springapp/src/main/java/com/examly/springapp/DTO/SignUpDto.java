package com.examly.springapp.DTO;


import lombok.Data;

@Data
public class SignUpDto {
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    private String password;
    private String address;
    private String phoneNumber;
}
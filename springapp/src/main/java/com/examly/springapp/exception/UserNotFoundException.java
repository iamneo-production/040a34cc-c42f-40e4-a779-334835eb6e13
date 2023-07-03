package com.examly.springapp.exception;

public class UserNotFoundException extends RuntimeException{
	public UserNotFoundException(){
		
	}
	public UserNotFoundException(String message,Exception e) {
		super(message);
	}
	
}

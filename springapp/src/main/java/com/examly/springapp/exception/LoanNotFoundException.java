package com.examly.springapp.exception;

public class LoanNotFoundException extends RuntimeException {
	public LoanNotFoundException() {
		
	}
	public LoanNotFoundException(String message, Exception e) {
		super(message);
	}
	
}

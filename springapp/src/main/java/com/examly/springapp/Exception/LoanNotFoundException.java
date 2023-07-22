package com.examly.springapp.Exception;

public class LoanNotFoundException extends RuntimeException {
	public LoanNotFoundException() {
		
	}
	public LoanNotFoundException(String message, Exception e) {
		super(message);
	}
	
}

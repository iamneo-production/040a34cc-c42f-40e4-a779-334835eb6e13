package main.java.com.examly.springapp.Exception;

public class UserNotFoundException extends RuntimeException{
	public UserNotFoundException(){
		
	}
	public UserNotFoundException(String message,Exception e) {
		super(message);
	}
	
}

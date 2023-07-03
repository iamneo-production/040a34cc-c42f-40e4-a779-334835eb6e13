package main.java.com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.java.com.examly.springapp.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long>{
	
}

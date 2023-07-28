package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long>{

	Optional<Payment> findByUserId(long id);

	List<Payment> findAllByUserId(long id);
	
}

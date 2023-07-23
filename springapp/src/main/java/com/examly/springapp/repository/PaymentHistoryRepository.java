package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.PaymentHistory;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentHistory,Long>{
	
}

package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification,Long>{

	List<Notification> findByUserId(long userId);

}


package com.examly.springapp.service.impl;


import java.util.List;

import java.time.LocalTime;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Notification;
import com.examly.springapp.repository.NotificationRepository;
import com.examly.springapp.service.NotificationService;

@Service
public class NotificationServiceImpl implements NotificationService{
	
	@Autowired
	private NotificationRepository notificationRepository; 

	@Override
	public void addNotification(Notification notification) {
		notification.setDate(LocalDate.now());
		notification.setTime(LocalTime.now());
		notificationRepository.save(notification);
	}

	@Override
	public List<Notification> getNotification(long userId) {
		return notificationRepository.findByUserId(userId);
	}
	
}

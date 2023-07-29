package com.examly.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Notification;

@Service
public interface NotificationService {
	public void addNotification(Notification notification);
	public List<Notification> getNotification(long id);
}

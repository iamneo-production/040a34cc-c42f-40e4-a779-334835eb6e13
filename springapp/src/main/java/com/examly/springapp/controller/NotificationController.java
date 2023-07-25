package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Notification;
import com.examly.springapp.service.NotificationService;


@RestController
@RequestMapping("/notifications")
@CrossOrigin
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;
	
	@PostMapping
	public ResponseEntity<String> addNotification(@RequestBody Notification notification){
		notificationService.addNotification(notification);
		return new ResponseEntity<>("Notification added Successfully",HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public List<Notification> getNotification(@PathVariable long id) {
		return notificationService.getNotification(id);
	}
}

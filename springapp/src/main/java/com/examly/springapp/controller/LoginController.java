package com.examly.springapp.controller;


import com.examly.springapp.model.User;
import com.examly.springapp.payload.CurrentUserDTO;
import com.examly.springapp.payload.JWTAuthResponse;
import com.examly.springapp.payload.LoginDto;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.service.AuthService;
import com.examly.springapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class LoginController {
	
	@Autowired
    private AuthService authService;
	
	@Autowired
    private UserService userService;

	@Autowired
    private UserRepository userRepository;


    @PostMapping("/login")
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto) {
        String token = authService.login(loginDto);
        String role = "";

        Optional<User> userOptional = userService.findByEmail(loginDto.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            role = user.getRole();
        }

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setAccessToken(token);
        jwtAuthResponse.setRole(role);

        return ResponseEntity.ok(jwtAuthResponse);
    }


    @GetMapping(path = "/roles", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<String>> getUserRoles(Authentication authentication) {
        List<String> roles = authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        return ResponseEntity.ok(roles);
    }

    @GetMapping("/currentUser")
    public CurrentUserDTO getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        CurrentUserDTO currentUserDTO = new CurrentUserDTO(user);

        return currentUserDTO;
    }


}
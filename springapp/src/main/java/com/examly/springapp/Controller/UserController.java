package com.examly.springapp.Controller;

import com.examly.springapp.DTO.SignUpDto;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.Model.User;
import com.examly.springapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    private UserRepository userRepository;

    @GetMapping("users/{id}")
    public Optional<User> getUserById(@PathVariable long id) {
        return userRepository.findById(id);
    }

    @PutMapping("users/{id}")
    public <UserUpdateRequest> ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody SignUpDto signUpDto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));

                user.setUserName(signUpDto.getUserName());
                user.setFirstName(signUpDto.getFirstName());
                user.setLastName(signUpDto.getLastName());
                user.setEmail(signUpDto.getEmail());
                user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
                user.setAddress(signUpDto.getAddress());
                user.setPhoneNumber(signUpDto.getPhoneNumber());
                userRepository.save(user);

        return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));


        userRepository.delete(user);

        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }
    @PostMapping("/users")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto) {


        if (userRepository.existsByUsername(signUpDto.getUsername())) {
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }


        if (userRepository.existsByEmail(signUpDto.getEmail())) {
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }


        User user = new User();
        user.setUserName(signUpDto.getUserName());
        user.setFirstName(signUpDto.getFirstName());
        user.setLastName(signUpDto.getLastName());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        user.setAddress(signUpDto.getAddress());
        user.setPhoneNumber(signUpDto.getPhoneNumber());

        Role roles = roleRepository.findByName("ROLE_USER").get();
        user.setRoles(Collections.singleton(roles));

        userRepository.save(user);

        return new ResponseEntity<>(" registered successfully", HttpStatus.OK);

    }
}

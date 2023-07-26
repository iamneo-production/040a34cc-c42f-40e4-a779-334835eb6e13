package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	Optional<User> findByEmail(String email);

    Optional<User> findById(Long id);
    
    default User findByIdDirect(Long id) {
    	Optional<User> optionalUser=findById(id);
    	return optionalUser.orElse(null);
    }
    
    @Query("SELECT u FROM User u WHERE u.isEnabled = 1 AND u.role = 'USER'")
	List<User> findAllByConditions();
	

}

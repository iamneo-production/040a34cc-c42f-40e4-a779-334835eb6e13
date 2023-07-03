package main.java.com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.java.com.examly.springapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	User findByUserId(long id);
	


}

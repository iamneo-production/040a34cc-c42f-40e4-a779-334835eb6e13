package com.examly.springapp;

<<<<<<< HEAD
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringappApplicationTests {

	@Test
	void contextLoads() {
	}

=======
import org.springframework.http.MediaType;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.examly.springapp.SpringappApplication;

import java.io.File;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {
	
	@Autowired
	private MockMvc mockMvc;

	@Test
	void test_case1() throws Exception {

		String st = "{\"id\":1,\"userId\": 123,\"loanAmount\": 10000.0,\"interestRate\": 5.0,\"status\": \"approved\",\"startDate\":\"2000-01-01\",\"endDate\":\"2022-12-31\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/loans").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(jsonPath("$").value(true)).andReturn();
	}

	@Test
	void test_case2() throws Exception {

		mockMvc.perform(get("/loans/1").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.userId").value(123)).andReturn();
	}

	@Test
	void test_case3() throws Exception {

		String st = "{\"id\":1,\"userId\": 123,\"loanAmount\": 10000.0,\"interestRate\": 6.0,\"status\": \"approved\",\"startDate\":\"2000-01-01\",\"endDate\":\"2022-12-31\"}";
		mockMvc.perform(MockMvcRequestBuilders.put("/loans/1").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
	}

	@Test
	void test_case4() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.delete("/loans/1").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();
	}

	@Test
	void test_case5() throws Exception {

		String st = "{\"id\":1,\"userId\": 123,\"loanAmount\": 10000.0,\"purpose\":\"education\",\"status\": \"applied\",\"applicationDate\":\"2000-01-01\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/loan-applications").contentType(MediaType.APPLICATION_JSON)
				.content(st).accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(jsonPath("$").value(true)).andReturn();
	}

	@Test
	void test_case6() throws Exception {

		mockMvc.perform(get("/loan-applications/1").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andExpect(jsonPath("$.userId").value(123)).andReturn();
	}

	@Test
	void test_case7() throws Exception {

		String st = "{\"id\":1,\"userId\": 123,\"loanAmount\": 10000.0,\"purpose\":\"education\",\"status\": \"approved\",\"applicationDate\":\"2000-01-01\"}";

		mockMvc.perform(MockMvcRequestBuilders.put("/loan-applications/1").contentType(MediaType.APPLICATION_JSON)
				.content(st).accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	@Test
	void test_case8() throws Exception {

		String st = "{\"id\":1,\"loanId\": 1,\"amount\": 10000.0,\"paymentDate\":\"2000-02-01\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/payments").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(jsonPath("$").value(true)).andReturn();
	}

	@Test
	void test_case9() throws Exception {

		mockMvc.perform(get("/payments/1").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.loanId").value(1)).andReturn();
	}

	@Test
	void test_case10() throws Exception {

		String st = "{\"id\":1,\"loanId\": 1,\"amount\": 10000.0,\"paymentDate\":\"2000-03-01\"}";
		mockMvc.perform(MockMvcRequestBuilders.put("/payments/1").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
	}

	

>>>>>>> Education-loan-portal-karthi-0212
}

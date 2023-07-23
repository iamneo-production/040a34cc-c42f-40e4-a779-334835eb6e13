package com.examly.springapp.config;

import com.examly.springapp.security.JwtAuthenticationEntryPoint;
import com.examly.springapp.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    private UserDetailsService userDetailsService;

    private JwtAuthenticationEntryPoint authenticationEntryPoint;

    private JwtAuthenticationFilter authenticationFilter;

    public SecurityConfig(UserDetailsService userDetailsService,
                          JwtAuthenticationEntryPoint authenticationEntryPoint,
                          JwtAuthenticationFilter authenticationFilter){
        this.userDetailsService = userDetailsService;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.authenticationFilter = authenticationFilter;
    }

    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http

                .csrf().disable()
                .authorizeHttpRequests((authorize) ->
                        authorize.antMatchers("/login").permitAll()
                                .antMatchers("/register/**").permitAll()
                                .antMatchers("/password/**").permitAll()
                                .antMatchers("/roles").permitAll()
                                .antMatchers("/currentUser").permitAll()
                                .antMatchers("/users/**").hasAnyAuthority("USER","ADMIN")
                                .antMatchers("/admin/**").hasAuthority("ADMIN")
                                .antMatchers("/loan/**").hasAnyAuthority("ADMIN","USER")
                                .antMatchers("/loans/**").hasAnyAuthority("ADMIN","USER")
                                .antMatchers("/payments/**").hasAnyAuthority("ADMIN","USER")
                                .antMatchers("/notifications/**").hasAnyAuthority("ADMIN","USER")
                                .antMatchers("/loan-applications/**").hasAnyAuthority("ADMIN","USER")
                                .antMatchers("/loan-applications2/**").hasAnyAuthority("ADMIN","USER")
                                .antMatchers("/image/**").hasAnyAuthority("ADMIN","USER")
                                .anyRequest().authenticated()

                ).exceptionHandling( exception -> exception
                        .authenticationEntryPoint(authenticationEntryPoint)
                ).sessionManagement( session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                );

        http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}

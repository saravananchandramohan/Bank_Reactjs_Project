package com.example.login;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<UserRegister,Integer> {
    UserRegister  findByUsername(String username);
    
}

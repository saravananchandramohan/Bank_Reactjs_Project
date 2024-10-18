package com.example.login;

import java.math.BigDecimal;
import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@NoArgsCoSnstructor
@Table(name="customers",schema="bank_db")
public class UserRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cust_id;
    private String username;
    private String cust_first_name;
    private String cust_last_name;
    private String address;
    private String city;
    private String state;
    private String contact_no;
    private String adhar_card;
    private String email_id;
    private Date birth_date;
    private BigDecimal monthly_salary;
    private String password;
    private String role;
}



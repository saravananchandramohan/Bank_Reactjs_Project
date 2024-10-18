use bank_db;
drop table customers;
CREATE TABLE customers (
    cust_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) ,
    cust_first_name VARCHAR(100),
    cust_last_name VARCHAR(100),
    address VARCHAR(255) ,
    city VARCHAR(100) ,
    state VARCHAR(100),
    contact_no VARCHAR(20),  
    adhar_card VARCHAR(12),   
    email_id VARCHAR(100) ,
    birth_date DATE,
    monthly_salary DECIMAL(10, 2) ,
    password VARCHAR(255),
    role VARCHAR(20)
);

DESCRIBE customers;
select * from customers;
SHOW COLUMNS FROM customers; -- MySQL

INSERT INTO customers (
    username, 
    cust_first_name, 
    cust_last_name, 
    address, 
    city, 
    state, 
    contact_no, 
    adhar_card, 
    email_id, 
    birth_date, 
    monthly_salary, 
    password, 
    role
) VALUES (
    'Saran@admin', 
    'saravanan', 
    'chandramohan', 
    '123 Main St', 
    'Anytown', 
    'Anystate', 
    '1234567890', 
    '123456789012', 
    'john.doe@example.com', 
    '1990-01-01', 
     5000.00, 
    'saran@123', 
    'admin'
);




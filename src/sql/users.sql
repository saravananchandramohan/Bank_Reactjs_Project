CREATE database bank_db;
USE bank_db;
create table users(
	id int auto_increment primary key,
    username varchar(50) not null unique,
    password varchar(50) not null,
    role enum('USER','ADMIN') not null
);
insert into users(username,password,role)values('admin','admin_password','ADMIN');
select*from users;
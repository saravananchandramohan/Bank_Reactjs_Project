package com.example.login;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public UserRegister findByUsername(String username){
        UserRegister userRegister= customerRepository.findByUsername(username);
        return userRegister;
    }
    public UserRegister findByUsername_1(String username){
        return customerRepository.findByUsername(username);
    }
    public void addCustomers(RegisterRequest registerRequest){
         UserRegister userRegister=new UserRegister();
         userRegister.setUsername(registerRequest.getUsername());
         userRegister.setCust_first_name(registerRequest.getCustFirstName());
         userRegister.setCust_last_name(registerRequest.getCustLastName());
         userRegister.setAddress(registerRequest.getAddress());
         userRegister.setCity(registerRequest.getCity());
         userRegister.setState(registerRequest.getState());
         userRegister.setContact_no(registerRequest.getContactNo());
         userRegister.setAdhar_card(registerRequest.getAdharCard());
         userRegister.setEmail_id(registerRequest.getEmailId());
         userRegister.setBirth_date(registerRequest.getBirthDate());
         userRegister.setMonthly_salary(registerRequest.getMonthlySalary());
         userRegister.setPassword(registerRequest.getPassword());
         
         customerRepository.save(userRegister);
    }
    

    public void updateUser(UserRegister userRegister) {
        customerRepository.save(userRegister);
    }
    
    public List<UserRegister> getUser(){
        return customerRepository.findAll();
    }
    public Optional<UserRegister> getUserById(int custId){
         return customerRepository.findById(custId);
    }
    public String deleteUserById(int cust_id){
        customerRepository.deleteById(cust_id);
        return "user data deleted";
    }

    public Optional<UserRegister> findById(int custId) {
        return customerRepository.findById(custId);
    }

    public RegisterRequest validateUser(String username,String password){
        UserRegister userRegister=customerRepository.findByUsername(username);
        if(userRegister!=null && userRegister.getPassword().equals(password)){
            return new RegisterRequest(userRegister.getCust_id(),userRegister.getCust_first_name(),userRegister.getEmail_id());
        }
        return null;
    }

    public RegisterRequest getUserByUsername(String username){
        UserRegister userRegister=customerRepository.findByUsername(username);
        if(userRegister!=null){
            return new RegisterRequest(userRegister.getCust_id(), userRegister.getCust_first_name(), userRegister.getEmail_id());
        }
        return null;
    }
}



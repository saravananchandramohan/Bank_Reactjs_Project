package com.example.login;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
   @Autowired
   private UserService userService;

   @PostMapping("/login")
   public ResponseEntity<UserRegister> loginUser(@RequestBody RegisterRequest registerRequest)
   {
        UserRegister userRegister=userService.findByUsername(registerRequest.getUsername());
        if(userRegister !=null && userRegister.getPassword().equals(registerRequest.getPassword())){
            return ResponseEntity.ok(userRegister);
        }
        else{
            return ResponseEntity.status(401).body(null);
        }
   }
   @PostMapping("/addCustomer")
   public void addCustomer(@RequestBody RegisterRequest registerRequest){
      userService.addCustomers(registerRequest);
   }
   @GetMapping("/users")
   public List<UserRegister> getAllUsers(){
      return userService.getUser();
   }
   @DeleteMapping("/deleteUser/{custId}")
   public String deleteUser(@PathVariable int custId){
      return userService.deleteUserById(custId);
   }
//    @GetMapping("/users/{custId}")
//     public Optional<UserRegister>  getUserById(@PathVariable int custId) {
//         return userService.getUserById(custId);
//     }

@GetMapping("/{custId}")
public ResponseEntity<UserRegister> getUserById(@PathVariable int custId) {
    Optional<UserRegister> user = userService.findById(custId);
    return user.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
}
@PutMapping("/users/updateCustomer")
    public ResponseEntity<String> updateUser(@RequestBody UserRegister userRegister) {
        Optional<UserRegister> existingUser = userService.findById(userRegister.getCust_id());
        if (existingUser.isPresent()) {
            userService.updateUser(userRegister);
            return ResponseEntity.ok("User updated successfully");
        } else {
            return ResponseEntity.status(404).body("No ID found");
        }
    }
    
    @GetMapping("/profile/{username}")
    public RegisterRequest getUserByUsername(@PathVariable String username){
        return userService.getUserByUsername(username);
    }
}

import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [custFirstName, setFirstName] = useState("");
  const [custLastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [adharCard, setAdharCard] = useState("");
  const [emailId, setEmailId] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cust_id, setCust_id] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post(
        "http://localhost:8080/api/addCustomer",
        {
          cust_id,
          username,
          custFirstName,
          custLastName,
          address,
          city,
          state,
          contactNo,
          adharCard,
          emailId,
          birthDate,
          monthlySalary,
          password,
        }
      );

      // Redirect to main menu on successful login
      if (response.status === 200) {
        // Perform redirection or update state
        setCust_id(response.data.cust_id);
        alert("Account created successfully");
        window.location.href = "/";
      }
    } catch (err) {
      setError("Username or password is incorrect");
    }
  };
  return (
    <div className="register-container">
      <header>
        <h1>XYZ Bank</h1>
        <h2>Create Account</h2>
      </header>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>Firstname:</lable>
          <input
            type="text"
            value={custFirstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>LastName:</lable>
          <input
            type="text"
            value={custLastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>Address:</lable>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>city:</lable>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>state:</lable>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>contact no:</lable>
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>Adharcard no:</lable>
          <input
            type="text"
            value={adharCard}
            onChange={(e) => setAdharCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>email id:</lable>
          <input
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>birthdate:</lable>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>Monthly salary:</lable>
          <input
            type="text"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <lable>password:</lable>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          submit
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      {cust_id && (
        <p className="success-message">Your Customer ID is:{cust_id}</p>
      )}
    </div>
  );
}
export default Register;

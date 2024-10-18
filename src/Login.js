//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
        role,
      });

      // Redirect to main menu on successful login
      if (response.status === 200) {
        // Perform redirection or update state
        const role = response.data.role;
        const adminName = response.data.username;
        if (role === "admin") {
          navigate("/Adminmain", { state: { adminName } });
          window.location.href = "/Adminmain";
        } else {
          window.location.href = "/UserMenu";
        }
      }
    } catch (err) {
      setError("Username or password is incorrect");
    }
  };
  const handleSignup = () => {
    window.location.href = "/Register";
  };
  // const handlegetlist = () => {
  //   window.location.href = "/UserList";
  // };
  // const handleUpdate = () => {
  //   window.location.href = "/UpdateUser";
  // };
  // const handleDelete = () => {
  //   window.location.href = "/DeleteUser";
  // };
  // const handleSearch = () => {
  //   window.location.href = "/SearchById";
  // };

  return (
    <div className="login-container">
      <header>
        <h1>XYZ Bank</h1>
        <h2>Login</h2>
      </header>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="admin">User</option>
            <option value="user">Admin</option>
          </select>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="signup_button" type="submit" onClick={handleSignup}>
          Sign Up
        </button>
        {/* <button className="signup_button" type="submit" onClick={handlegetlist}>
          Get All User List
        </button>
        <button className="signup_button" type="submit" onClick={handleUpdate}>
          Update User
        </button>
        <button className="signup_button" type="submit" onClick={handleDelete}>
          Delete User
        </button>
        <button className="signup_button" type="submit" onClick={handleSearch}>
          Search User
        </button> */}
      </form>

      <footer>
        <p>&copy; 2024 Bank XYZ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;

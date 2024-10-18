import React from "react";
import "./Adminmain.css";
import { useLocation } from "react-router-dom";
const AdminMain = () => {
  const location = useLocation();
  const adminName = location.state?.adminName || "Admin";
  return (
    <div className="admin-main-container">
      <header className="admin-header">
        <h1>XYZ Bank</h1>
        <div className="admin-info">Logged in as: {adminName}</div>
        <button onClick={() => (window.location.href = "/")} className="logout">
          Log out
        </button>
      </header>

      <nav className="admin-nav">
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/UserList")}
        >
          Customers List
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/DeleteUser")}
        >
          Delete User
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/SearchById")}
        >
          Search User
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/UpdateUser")}
        >
          Update User
        </button>
      </nav>
      <main className="admin-content">
        <h2>Welcome to the Admin Dashboard</h2>
      </main>
      <footer className="admin-footer">
        <p>&copy; 2024 XYZ Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminMain;

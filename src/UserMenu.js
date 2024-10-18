import React from "react";
import "./Adminmain.css";
const UserMenu = () => {
  return (
    <div className="admin-main-container">
      <header className="admin-header">
        <h1>XYZ Bank</h1>
      </header>
      <nav className="admin-nav">
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/SearchById")}
        >
          View Profile
        </button>
        <button
          className="nav-button"
          onClick={() => (window.location.href = "/UpdateUser")}
        >
          Edit Profile
        </button>
      </nav>
      <main className="admin-content">
        <h2>Welcome to the User Dashboard</h2>
        {/* Additional content can go here */}
      </main>
      <footer className="admin-footer">
        <p>&copy; 2024 XYZ Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserMenu;

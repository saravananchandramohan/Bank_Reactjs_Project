import React, { useState } from "react";
import axios from "axios";
import "./DeleteUser.css";
function DeleteUser() {
  const [userId, setCust_id] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    try {
      await axios.delete(`http://localhost:8080/api/deleteUser/${userId}`);
      setMessage("User deleted successfully!");
    } catch (err) {
      setError("No ID found");
    } finally {
      setLoading(false);
    }
  };
  const handleGoToMenu = () => {
    window.location.href = "/Adminmain";
  };
  return (
    <div className="delete-user-container">
      <h1>Delete User</h1>
      <form>
        <label>Customer_Id</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setCust_id(e.target.value)}
        />
        <button type="submit" onClick={handleDelete}>
          Delete
        </button>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <button onClick={handleGoToMenu} style={{ marginTop: "20px" }}>
        Go to Menu
      </button>
      <footer className="footer">
        <p>&copy; 2024 Bank XYZ. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default DeleteUser;

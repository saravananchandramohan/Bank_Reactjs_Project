import React, { useState } from "react";
import axios from "axios";
import "./UserList.css";
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError(""); // Reset error message

    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };
  const handleGoToMenu = () => {
    window.location.href = "/Adminmain";
  };

  return (
    <div>
      <h1>Customer List</h1>
      <button onClick={fetchUsers}>Get All Customer Details</button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Contact No</th>
              <th>AdharCard No</th>
              <th>Email Id</th>
              <th>Birth Date</th>
              <th>Monthly Salary</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.cust_id}>
                {" "}
                <td>{user.cust_first_name}</td>
                <td>{user.cust_last_name}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.contact_no}</td>
                <td>{user.adhar_card}</td>
                <td>{user.email_id}</td>
                <td>{user.birth_date}</td>
                <td>{user.monthly_salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleGoToMenu} style={{ marginTop: "20px" }}>
        Go to Menu
      </button>
      <footer>
        <p>&copy;2024 Bank XYZ. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default UserList;

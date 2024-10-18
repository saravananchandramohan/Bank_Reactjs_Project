import React, { useState } from "react";
import axios from "axios";

function SearchById() {
  const [custId, setCustId] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`http://localhost:8080/api/${custId}`);
      setUser(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("User not found");
      } else {
        setError("Error fetching user data");
      }
      setUser(null);
    }
  };
  const handleGoToMenu = () => {
    window.location.href = "/Adminmain";
  };
  return (
    <div>
      <h1>Search By Customer ID</h1>
      <form onSubmit={fetchUser}>
        <label>Enter Customer ID</label>
        <input
          type="text"
          value={custId}
          onChange={(e) => setCustId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {user && (
        <div>
          <h1>User Details</h1>
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
              <tr>
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
            </tbody>
          </table>
          <button onClick={handleGoToMenu} style={{ marginTop: "20px" }}>
            Go to Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchById;

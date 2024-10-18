import React, { useState } from "react";
import axios from "axios";

function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({
    address: "",
    contact_no: "",
    state: "",
    city: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchUser = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`http://localhost:8080/api/${userId}`);
      setUserData(response.data);
    } catch (err) {
      setError("No ID found");
      setUserData({ address: "", contact_no: "", state: "", city: "" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.put(`http://localhost:8080/api/users/updateCustomer`, {
        id: userId,
        ...userData,
      });
      alert("User updated successfully!");
    } catch (err) {
      setError("Error updating user");
    } finally {
      setLoading(false);
    }
  };
  const handleGoToMenu = () => {
    window.location.href = "/Adminmain";
  };
  return (
    <div>
      <h1>Update User Information</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearchUser} disabled={loading}>
        Search User
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
            <label>Contact No</label>
            <input
              type="text"
              name="contact_no"
              value={userData.contact_no}
              onChange={handleChange}
            />
            <label>State</label>
            <input
              type="text"
              name="state"
              value={userData.state}
              onChange={handleChange}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={userData.city}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={loading}>
            Update User
          </button>
          <button onClick={handleGoToMenu} style={{ marginTop: "20px" }}>
            Go to Menu
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateUser;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AdminMain from "./AdminMenu";
import Register from "./Register";
import UserList from "./UserLists";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import SearchById from "./SearchById";
import UserMenu from "./UserMenu";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Adminmain" element={<AdminMain />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/DeleteUser" element={<DeleteUser />} />
        <Route path="/SearchById" element={<SearchById />} />
        <Route path="/UserMenu" element={<UserMenu />} />
      </Routes>
    </Router>
  );
};

export default App;

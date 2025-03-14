import React from "react";
// import { Outlet, Link, Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Render child routes */}
      {/* <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes> */}
      <Outlet />
    </div>
  );
};

export default Profile;

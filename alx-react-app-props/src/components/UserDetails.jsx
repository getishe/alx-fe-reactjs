import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const user = useContext(UserContext);
  return (
    <div>
      <p> Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserDetails;

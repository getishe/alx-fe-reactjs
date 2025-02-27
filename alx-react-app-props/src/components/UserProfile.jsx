// const UserProfile = (props) => {
//   return (
//     <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
//       <h2 style={{ color: "blue" }}>{props.name}</h2>
//       <p>
//         Age: <span style={{ fontWeight: "bold" }}> {props.age}</span>
//       </p>
//       <p>
//         {" "}
//         Bio: <span style={{ fontWeight: "bold" }}>{props.bio} </span>
//       </p>
//     </div>
//   );
// };

// export default UserProfile;
import React, { useContext } from "react";
import UserContext from "./UserContext";
import PropTypes from "prop-types";
import "./UserProfile.css";
const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>{userData.name}</h2>
      <p>{userData.age}</p>
      <p>{userData.bio}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;

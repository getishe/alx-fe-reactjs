import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const UserData = useContext(UserContext);
  if (!UserData || !UserData.length) {
    return <div>No user data available</div>;
  }

  // Access the second user in the array (Alice's Data )
  const user = UserData[0];
  const aliceData = UserData[1];
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}
    >
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>bio: {user.bio}</p>
      <p>email: {user.email}</p>
      <h3>Alice name</h3>
      <p>Name: {aliceData.name}</p>
      <p>Age: {aliceData.age}</p>
      <p>Bio: {aliceData.bio}</p>
    </div>
  );
};

export default UserProfile;

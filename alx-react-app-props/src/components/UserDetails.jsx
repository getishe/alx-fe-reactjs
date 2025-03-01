import { useContext } from "react";
import UserContext from "./UserContext";

const UserDetails = () => {
  const userData = useContext(UserContext);

  if (!userData || !userData.length) {
    return <div>No user data available</div>;
  }

  // Access the first user in the array (John Doe's Data )
  const user = userData[0];

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "1rem 0",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>User Details</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserDetails;

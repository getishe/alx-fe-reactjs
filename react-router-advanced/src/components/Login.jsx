import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/profile"); // Redirect to profile after login
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div>
      <h1>{isAuthenticated ? "You are logged in!" : "You are logged out!"}</h1>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default Login;

// import { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// const Login = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!user.name.trim == "Jhon" || !user.email.trim == "Jhon@gmail.com") {
//       alert("Invalid User");
//     } else {
//       alert("Login Success");
//     }
//   };

//   const handleLogout = (e) => {
//     e.preventDefault();
//     setUser({ name: "", email: "" });
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={user.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//         <button type="submit" onClick={handleLogout}>
//           Logout
//         </button>
//       </form>
//       <Outlet />
//     </div>
//   );
// };

// export default Login;

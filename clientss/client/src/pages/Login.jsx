import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../api/Api"; 

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      navigate("/"); 
    } catch (error) {
      console.error("Login error:", error); // 🔹 Full error in console
  console.log("Error response:", error.response); // 🔹 API response (if any)
  console.log("Error request:", error.request);   // 🔹 Network request (if server unreachable)
  console.log("Error message:", error.message);   // 🔹 Just message

      setMessage(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="container1">
      <h2 className="pro">Add Product App</h2>
      <form className="add-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-submit">Login</button>
        <p className="message">{message}</p>
        <p className="message">
          Dont have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </form>
    </div>
  );
};

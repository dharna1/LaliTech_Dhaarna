import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { registerUser } from "../api/Api"; 

export const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData); // call API
      setMessage("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="container1">
      <h2 className="pro">Add Product App</h2>
      <form className="add-form" onSubmit={handleRegister}>
        <h2>Register</h2>
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
        <button type="submit" className="btn-submit">Register</button>
        <p className="message">{message}</p>
        <p className="message">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </div>
  );
};

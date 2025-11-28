import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "../../App";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🆕 useEffect will redirect if user already logged in

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(`${server}/signup`, {
        name,
        email,
        password,
      });

      toast.success(data.message || "Signup Successful!");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signuppage-container">
      <div className="signuppage-form-container">
        <div className="signuppage-form-left">
          <div className="signuppage-logo-circle">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762494318/logo-vpvv-enhance_deivee.png"
              alt="vpvv-logo"
            />
          </div>
          <h1>VPVV Techno Construction</h1>
          <p>Create your account and join us.</p>
        </div>

        <div className="signuppage-form-right">
          <h2>Create Account</h2>
          <p className="signuppage-desc">Sign up to access your portal.</p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Create Password</Form.Label>
                <div className="signuppage-password-wrapper">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="signuppage-password-toggle"
                    onClick={togglePassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ only if you use react-router
import { toast } from "react-toastify";
import { server } from "../../App";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ optional

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("please Enter the Credentials")
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
      );

      // ✅ save token if backend sends it in response
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      toast.success(data.message || "Login Successful");
      console.log("User:", data);

      // ✅ navigate to dashboard (optional)
      navigate("/upload-news");
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message || "Login Failed");
      } else {
        toast("Server not responding. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="loginpage-container">
        <div className="loginpage-form-container">
          {/* LEFT SIDE */}
          <div className="loginpage-form-left">
            <div className="loginpage-logo-circle">
              <img
                src="https://res.cloudinary.com/dttqciolc/image/upload/v1762494318/logo-vpvv-enhance_deivee.png"
                alt="vpvv-logo"
              />
            </div>
            <h1>VPVV Techno Construction</h1>
            <p>Building the future, Make in India.</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="loginpage-form-right">
            <h2>Welcome Back!</h2>
            <p className="loginpage-desc">
              Sign in to manage your construction projects.
            </p>

            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="password-wrapper">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Example@#123"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="password-toggle" onClick={togglePassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login to Portal"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

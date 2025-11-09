import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import axios from "../../api/axiosInstance"

const AuthPage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all required fields");
      return;
    }
    
try {
  const endpoint=isLogin?"/auth/login":"/auth/register";

  const payload=isLogin?{email,password}:{name,email,password}

  const{data}=await axios.post(endpoint,payload)

  localStorage.setItem("userInfo",JSON.stringify(data));
  setUser(data);

  console.log(isLogin?"Login successfull !":"Registration successfull!");

  isLogin?navigate("/"):navigate("/login")

} catch (error) {
   console.log((error.response?.data?.message || "Something went wrong"));
}
    
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

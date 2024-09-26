import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  let navigate = useNavigate();
  useEffect(() => {
    /* background: var(--background); */
    document.getElementById("body").className = "rootback";
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const localData = [
    {
      user_name: "Pawan",
      user_id: "88da1135-9d3b-4f02-b5ab-84a2735ce713",
    },
    {
      user_name: "Deepak",
      user_id: "2d5a8e8b-7234-4410-9f91-d1e8ad94a98a",
    },
    {
      user_name: "Naveen",
      user_id: "2fe0e602-50cc-49c4-bf5c-fe8cf8784520",
    },
    {
      user_name: "Lokender",
      user_id: "2fe0e602-50cc-49c4-bf5c-fe8cf8784520",
    },
    {
      user_name: "Sona",
      user_id: "2fe0e602-50cc-49c4-bf5c-fe8cf8784520",
    },
  ];
  const removeSpaces = (str) => str.replace(/\s+/g, "");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = username.toLocaleLowerCase();
    const newUserName = removeSpaces(newUser);
    console.log("newUser", newUserName);
    // Basic validation
    if (!newUserName || !password) {
      setError("Please fill in both fields.");
      return;
    }
    let userData = localData.find(
      (user) => removeSpaces(user.user_name.toLocaleLowerCase()) === newUserName
    );
    if (userData) {
      if (password === "123456") {
        setError("");
        localStorage.setItem("uuid", userData.user_id);
        localStorage.setItem("userName", userData.user_name);
        navigate(`/home`);
      } else {
        setError("Invalid Password!");
      }
    } else {
      setError("Invalid User!");
    }
  };
  return (
    <>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity" style={{ color: "white" }}>
              LOGIN
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="username"
                id="username"
                value={username}
                placeholder="User-Name"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && (
                <p className="error" style={{ color: "red" }}>
                  {error}
                </p>
              )}
              <button className="opacity">SUBMIT</button>
            </form>
            <div className="register-forget opacity">
              <a href="">REGISTER</a>
              <a href="">FORGOT PASSWORD</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
}

export default Login;

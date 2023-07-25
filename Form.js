import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Form.css"; // Import the external CSS file

const Form = () => {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Slide animation configuration for modal
  const modalAnimation = useSpring({
    to: {
      transform: modal ? "translateY(0%)" : "translateY(-100%)",
      opacity: modal ? 1 : 0,
    },
  });

  // Slide animation configuration for Go Back button
  const backButtonAnimation = useSpring({
    to: {
      transform: modal ? "translateY(0%)" : "translateY(-100%)",
      opacity: modal ? 1 : 0,
    },
  });

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("⚠️ Fields should not be left empty");
    } else {
      setErrorMessage("");
      setModal(true);
    }
  };

  return (
    <>
      {modal ? (
        <animated.div style={modalAnimation} className="container">
          <div className="texty">
            <h1>Welcome Back Dear🤗</h1>
          </div>
          <div className="btni">
            <animated.button
              style={backButtonAnimation}
              onClick={() => setModal(false)}
            >
              Go Back
            </animated.button>
          </div>
        </animated.div>
      ) : (
        <div className="main-container">
          <div className="logo">
            <h1>Sign in</h1>
          </div>
          <div className="form-main">
            <form action="">
              <div className="lable">
                <label htmlFor="User">Username</label>
                <input
                  type="text"
                  name="User"
                  id="User"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="lable">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="btn">
              <button onClick={handleLogin}>Login</button>
            </div>
            <div className="text">
              <p>
                Don't remember the password? <a href="hello">Forgot Password</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;

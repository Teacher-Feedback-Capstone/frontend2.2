import React, { useState } from 'react';
import styles from './LoginMenu.module.css';
import { useNavigate } from "react-router-dom";

const LoginMenu = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await onLogin(username, password);
    if (data) {
      navigate("/dashboard");
    } else {
      // Trigger shake animation if login fails
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const [loginFailed, setLoginFailed] = useState(false);

  return (
    <div className={styles.LoginMenu}>
      <div className={styles.welcome}>Welcome Back!</div>
      <div className={styles.InputContainer}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = await onLogin(username, password);
            if (data) {
              navigate("/dashboard");
              setLoginFailed(false);
            } else {
              setLoginFailed(true);
              setShake(true);
              setTimeout(() => setShake(false), 500);
            }
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginFailed && (
            <div className={styles.alert}>Invalid Credentials. Please try again.</div>
          )}
          <div className={styles.forgotPassword}>Forgot Password?</div>
          <button
            type="submit"
            className={`${styles.SubmitButton} ${shake ? styles.shake : ''}`}
          >
            Login
          </button>
        </form>
        <div className={styles.welcomeText}>Haven't made an account?</div>
        <div className={styles.SignUp} onClick={handleLogin}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default LoginMenu;
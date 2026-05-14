import { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

import styles from "../pages/LoginPage.module.css";
import union from "../assets/images/union.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault()
    setError("");

    if (!username || !password) {
      setError("All files are required...");
      return;
    }

    try {
      setLoading(true);
      const res = await loginUser({ username, password });
      console.log(res.data);

      // Get token
      const token = res.data.token;

      // Save in localStorage
      localStorage.setItem("token", token);

      navigate("/products");
      console.log("res data is:", res.data);
    } catch (error) {
      setError("Login Failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>بوت کمپ بوتواستارت</h3>
      <div className={styles.loginForm}>
        <img src={union} alt="login logo" />
        <p className={styles.loginTitle}>فرم ورود</p>
        <form onSubmit={loginHandler}>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "loading" : "Login"}
          </button>
          <Link className={styles.link} to="/register">ایجاد حساب کاربری!!</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

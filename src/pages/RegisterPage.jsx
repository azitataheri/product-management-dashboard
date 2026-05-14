import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/auth";
import styles from "../pages/RegitsterPage.module.css";
import union from "../assets/images/union.png";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle register
  const handleRegister = async () => {
    setError("");

    if (!username || !password || !confirmpassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmpassword) {
      setError("Passwords dont macth....!!!");
      return;
    }

    try {
      setLoading(true);
      const res = await registerUser({ username, password });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      setError("Register failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>بوت کمپ بوتواستارت</h3>
      <div className={styles.registerForm}>
        <img src={union} alt="refister logo" />
        <p className={styles.registerTitle}>فرم ثبت نام</p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder=" رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="تکرار رمز عبور"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <button type="submit" disabled={loading}>
              {loading ? "loading..." : "ثبت نام"}
            </button>
            <small>حساب کاربری دارید؟</small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

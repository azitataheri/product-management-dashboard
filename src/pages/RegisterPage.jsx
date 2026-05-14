import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { registerUser } from "../services/auth";
import union from "../assets/images/union.png";
import styles from "../pages/RegitsterPage.module.css";


function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const eyePasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const eyeConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  // validate
  const validate = () => {
    const newErrors = {};

    // username
    if (!username.trim()) {
      newErrors.username = "نام کاربری الزامی است";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      newErrors.username = "فقط حروف انگلیسی مجاز است";
    }

    // password
    if (!password) {
      newErrors.password = "رمز عبور الزامی است";
    } else if (password.length < 6) {
      newErrors.password = "رمز باید حداقل ۶ کاراکتر باشد";
    }

    if (!confirmpassword) {
      newErrors.confirmpassword = "  تکرار رمز عبور الزامی است";
    } else if (confirmpassword.length < 6) {
      newErrors.confirmpassword = "رمز باید حداقل ۶ کاراکتر باشد";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Register
  const handleRegister = async (e) => {
  e.preventDefault();

  setErrors({});
  setServerError("");

  const isValid = validate();

  if (!isValid) return;

  try {
    setLoading(true);

    await registerUser({
      username: username.trim().toLowerCase(),
      password,
    });

    navigate("/login");

  } catch (error) {
    console.log(error);

    setServerError("مشکل از سرور است");

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
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}

          <div className={styles.passwordBox}>
            <input
              className={styles.password}
              type={showPassword ? "text" : "password"}
              placeholder=" رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.eyeBtn} onClick={eyePasswordHandler}>
              {showPassword ? (
                <FaEye style={{ color: "#7a7777" }} />
              ) : (
                <FaEyeSlash style={{ color: "#7a7777" }} />
              )}
            </span>
          </div>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
          <div className={styles.passwordBox}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="تکرار رمز عبور"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className={styles.eyeBtn} onClick={eyeConfirmPasswordHandler}>
              {showConfirmPassword ? (
                <FaEye style={{ color: "#7a7777" }} />
              ) : (
                <FaEyeSlash style={{ color: "#7a7777" }} />
              )}
            </span>
          </div>
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          {serverError && <p style={{ color: "red" }}>{serverError}</p>}
          <div>
            <button type="submit" disabled={loading}>
              {loading ? "کمی صبر کنید..." : "ثبت نام"}
            </button>
            <Link className={styles.link} to="/login">حساب کاربری دارید؟</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

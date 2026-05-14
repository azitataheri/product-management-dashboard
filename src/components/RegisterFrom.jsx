import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../pages/RegitsterPage.module.css";
import union from "../assets/images/union.png";

function RegisterFrom({
  username,
  setUsername,
  errors,
  password,
  setPassword,
  showPassword,
  eyeHandler,
  confirmpassword,
  setConfirmPassword,
  serverError,
  loading,
  handleRegister,
}) {
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
          {errors.username && <p className={styles.error}>{errors.username}</p>}

          <div className={styles.passwordBox}>
            <input
              className={styles.password}
              type={showPassword ? "text" : "password"}
              placeholder=" رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.eyeBtn} onClick={eyeHandler}>
              {showPassword ? (
                <FaEye style={{ color: "#7a7777" }} />
              ) : (
                <FaEyeSlash style={{ color: "#7a7777" }} />
              )}
            </span>
          </div>
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <input
            type="password"
            placeholder="تکرار رمز عبور"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {serverError && <p style={{ color: "red" }}>{serverError}</p>}
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

export default RegisterFrom;

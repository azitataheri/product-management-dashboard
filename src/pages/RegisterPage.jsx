import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";

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
    // Validaate
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
      const res = await registerUser( { username, password });
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
    <div>
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
      <button onClick={handleRegister} disabled={loading}>
        {loading ? "loading..." : "Register"}
      </button>
    </div>
  );
}

export default RegisterPage;

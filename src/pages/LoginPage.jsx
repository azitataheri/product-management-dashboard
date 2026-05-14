import { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async () => {
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
    <div>
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
      <button onClick={loginHandler} disabled={loading}>
        {loading ? "loading" : "Login"}
      </button>
    </div>
  );
}

export default LoginPage;

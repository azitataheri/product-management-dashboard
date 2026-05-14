import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import RegisterFrom from "../components/RegisterFrom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();


  const eyeHandler = () => {
    setShowPassword(!showPassword)
  }
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle register
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) return;

    if (!username || !password || !confirmpassword) {
      setErrors("All fields are required");
      return;
    }
    if (password !== confirmpassword) {
      setErrors("Passwords dont macth....!!!");
      return;
    }

    try {
      setLoading(true);
      const res = await registerUser({ username, password });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      setServerError("Register failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
        <RegisterFrom 
        username={username}
        setUsername={setUsername}
        errors={errors}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        eyeHandler={eyeHandler}
        confirmpassword={confirmpassword}
        setConfirmPassword={setConfirmPassword}
        serverError={serverError}
        loading={loading}
        handleRegister={handleRegister}
        />
  );
}

export default RegisterPage;

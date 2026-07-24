import React, { useState } from "react";
import { register } from "../api/authApi";
import { useAppDispatch } from "../hooks/redux";
import { login as loginAction } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await register(login, password);

      dispatch(
        loginAction({
          token: response.data.access,
          user: {
            id: response.data.id,
            login: response.data.login,
          },
        }),
      );

      localStorage.setItem("token", response.data.access);

      navigate("/");
    } catch (e) {
      console.error(e);
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Логин"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />

      <button onClick={handleRegistration}>Зарегистрироваться</button>
    </div>
  );
}

export default RegistrationPage;

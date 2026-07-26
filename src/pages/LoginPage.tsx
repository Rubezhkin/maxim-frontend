import React, { useState } from "react";
import { login as loginRequest } from "../api/authApi";
import { useAppDispatch } from "../hooks/redux";
import { login as loginAction } from "../store/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginRequest(login, password);

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

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.id,
          login: response.data.login,
        }),
      );

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

      <button onClick={handleLogin}>Войти</button>
      <Link to="/registration">Регистрация</Link>
    </div>
  );
}

export default LoginPage;

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { logout as logoutResponse } from "../api/authApi";
import { logout } from "../store/auth/authSlice";

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  console.log("user data ", user);

  const handleLogout = async () => {
    await logoutResponse();

    dispatch(logout());

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Maxim
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Лента
        </Button>

        <Button color="inherit" component={Link} to="/users">
          Пользователи
        </Button>

        <Button color="inherit" component={Link} to={`/profile/${user?.id}`}>
          {user?.login}
        </Button>

        <Button color="inherit" onClick={handleLogout}>
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

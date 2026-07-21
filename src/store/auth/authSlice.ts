import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  login: string;
}

interface AuthState {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
}

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState: AuthState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  isAuth: !!token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: IUser; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },

    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

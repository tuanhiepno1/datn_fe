import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../types/User";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null
};

export const authSlice = createSlice({
  name: 'auth', 
  initialState,
  reducers: {
    setAuthLogin: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setAuthLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
});

export const { setAuthLogin, setAuthLogout } = authSlice.actions;

export default authSlice.reducer;
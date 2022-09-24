import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  error: '',
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<AuthState['isLoggedIn']>) => {
      state.isLoggedIn = action.payload;
    },
    setAuthError: (state, action: PayloadAction<AuthState['error']>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<AuthState['isLoading']>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoggedIn, setAuthError, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

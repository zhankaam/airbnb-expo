import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FormDataType, LoginResponseType } from 'src/services/http/auth';

import { auth } from '../../../firebase';
export interface AuthState {
  error: string;
  isLoading: boolean;
  token: string | null;
  user: LoginResponseType | null;
}

const initialState: AuthState = {
  error: '',
  isLoading: false,
  token: null,
  user: null,
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password }: FormDataType, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof Error) {
        thunkAPI.dispatch(setAuthError(error.message));
      }
    } finally {
      thunkAPI.dispatch(setIsLoading(false));
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: FormDataType, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (e instanceof Error) {
        thunkAPI.dispatch(setAuthError(e.message));
      }
    } finally {
      thunkAPI.dispatch(setIsLoading(false));
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthError: (state, action: PayloadAction<AuthState['error']>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<AuthState['isLoading']>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
  },
});

export const { setAuthError, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

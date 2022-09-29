import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { authAPI, FormDataType, LoginResponseType } from 'src/shared/api/auth';

export interface AuthState {
  isLoggedIn: boolean;
  error: string;
  isLoading: boolean;
  token: string | null;
  user: LoginResponseType | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  error: '',
  isLoading: false,
  token: null,
  user: null,
};

export const signUp = createAsyncThunk('auth/signUp', async (formData: FormDataType, thunkAPI) => {
  try {
    const data = await authAPI.signUp(formData);
    thunkAPI.dispatch(setIsLoggedIn(true));
    console.log(data);
    return data;
  } catch (e) {
    const err = e as Error | AxiosError<{ message: string }>;
    if (axios.isAxiosError(err)) {
      const error = err.response?.data ? err.response.data.message : err.message;
      console.log({ err });
      thunkAPI.dispatch(setAuthError(error));
    }
  } finally {
    thunkAPI.dispatch(setIsLoading(false));
  }
});

export const login = createAsyncThunk(
  'auth/login',
  async (formData: Pick<FormDataType, 'email' | 'password'>, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const data = await authAPI.signIn(formData);
      thunkAPI.dispatch(setIsLoggedIn(true));
      return data;
    } catch (e) {
      const err = e as Error | AxiosError<{ message: string }>;
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.message : err.message;
        console.log({ err });
        thunkAPI.dispatch(setAuthError(error));
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
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.result;
    });
  },
});

export const { setIsLoggedIn, setAuthError, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

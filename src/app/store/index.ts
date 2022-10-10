import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from 'src/entities/auth/model';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

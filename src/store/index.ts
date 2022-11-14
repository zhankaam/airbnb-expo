import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from 'src/store/auth';

import { exploreApi } from './explore/index';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [exploreApi.reducerPath]: exploreApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(exploreApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

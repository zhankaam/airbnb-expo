import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from 'src/entities/auth/model';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();

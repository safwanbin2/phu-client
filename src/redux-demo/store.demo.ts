import { configureStore } from "@reduxjs/toolkit";
import { baseDemoApi } from "./api/baseApi.demo";
import authDemoReducer from "./features/auth/authSlice.demo";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authDemoReducer);

export const store = configureStore({
  reducer: {
    [baseDemoApi.reducerPath]: baseDemoApi.reducer,
    authDemo: persistedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

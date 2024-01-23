import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, saveUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:5000/api/v1`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (
  args,
  { dispatch, getState },
  extraOptions
) => {
  let result = await baseQuery(args, { dispatch, getState }, extraOptions);
  if (result?.error?.status === 401) {
    const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data?.data?.accessToken) {
      const currentUser = (getState() as RootState).auth.user;
      dispatch(saveUser({ user: currentUser, token: data.data.accessToken }));

      result = await baseQuery(args, { dispatch, getState }, extraOptions);
    } else {
      dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

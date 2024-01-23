import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store.demo";
import { logout, saveUser } from "../features/auth/authSlice.demo";

// attaching header authorization before every request
const baseQuery = fetchBaseQuery({
  baseUrl: "/fd",
  credentials: "include",
  prepareHeaders: (headers, { getSate }) => {
    const token = (getSate() as RootState).authDemo.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

// binding base query to get the error at similar stage
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const res = await fetch(`/ds`, {
      method: "POST",
    });
    const data = await res.json();
    if (data.data.accessToken) {
      const user = api.getState().auth.user;
      api.dispatch(saveUser({ user, token: data.data.accessToken }));
    } else {
      api.dispatch(logout());
    }
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

// base query
export const baseDemoApi = createApi({
  reducerPath: "baseDemoApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

import { baseDemoApi } from "../../api/baseApi.demo";

const authDemoApi = baseDemoApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (userInfo) => ({
        url: "/something",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authDemoApi;

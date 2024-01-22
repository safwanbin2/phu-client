import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAcademicSemesters: build.query({
      query: () => ({
        url: "academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAcademicSemestersQuery } = academicSemesterApi;

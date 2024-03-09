import { apiSlice } from "./apiSlice";
import { ISignUpFx, ISignInFx } from "@/types/auth";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials: ISignUpFx) => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials: ISignInFx) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    checkUser: builder.query({
      query: () => ({
        url: '/users/login-check',
        method: 'GET',
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: '/users/logout',
        method: 'GET',
      }),
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useCheckUserQuery, useLogoutQuery } = authApi
import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./features/themeMode/themeModeSlice";
import userSlice from "./features/user/userSlice";
import zIndexSlice from "./features/zIndex/zIndexSlice";
import { apiSlice } from "./features/api/apiSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      themeMode: themeModeSlice,
      user: userSlice,
      zIndex: zIndexSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


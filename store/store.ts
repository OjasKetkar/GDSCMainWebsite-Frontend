import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice, AuthSlice } from "./slices/auth.slice";

export const useBoundStore = create<AuthSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      {
        name: "bound-storage",
      }
    )
  )
);

import { StateCreator } from "zustand";

export interface StateLoginProps {
  token: string | null;
  user: any | null;
  status: boolean;
}

export interface AuthSlice {
  token: string | null;
  user: any | null;
  setToken: (token: string | null) => void;
  setUser: (user: any | null) => void;
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
  stateLogin: (stateLoginProps: StateLoginProps) => void;
  stateLogout: () => void;
}

export const createAuthSlice: StateCreator<
  AuthSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  AuthSlice
> = (set) => ({
  token: null,
  user: null,
  isLoggedIn: false,
  setToken: (token) => set({ token: token }),
  setUser: (user) => set({ user: user }),
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  stateLogin: ({ token, user, status }) =>
    set({
      isLoggedIn: status,
      user: user,
      token: token,
    }),
  stateLogout: () =>
    set({
      isLoggedIn: false,
      user: null,
      token: null,
    }),
});

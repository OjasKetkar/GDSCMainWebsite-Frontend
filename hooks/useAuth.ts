import React, { useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";
import useSnack from "./useSnack";
import { useBoundStore } from "../store/store";
import { setSession } from "../utils/helpers";

export interface loginParams {
  email: string;
  password: string;
}

const useAuth = () => {
  const { enqueSnack } = useSnack();
  const {
    stateLogin,
    stateLogout,
    setUser,
    setLoggedIn,
    setToken,
    isLoggedIn,
    user,
  } = useBoundStore();

  const login = useCallback(async (data: loginParams) => {
    const res = await axiosInstance.post("/auth/login", data);
    console.log(res, "this is the result");
    if (res.data.ok) {
      const token = res.data.token;
      const user = res.data.user;
      enqueSnack("Login successfull!", { type: "success" });
      setUser(user);
      setToken(token);
      setLoggedIn(true);
      // stateLogin({
      //   status: true,
      //   user: user || null,
      //   token: token || null,
      // });
      setSession(token);
    } else {
      enqueSnack(res.data.message || "Something went wrong", { type: "error" });
    }
  }, []);

  const initialize = useCallback(async () => {
    try {
      const res = await axiosInstance.get("/auth/verify");
      if (res.data.ok) {
        const user = res.data.user;
        setUser(user);
      } else {
        enqueSnack(res.data.message || "Something went wrong", {
          type: "error",
        });
      }
    } catch (error) {
      enqueSnack("Something went wrong", { type: "error" });
      logout();
    }
  }, []);

  const logout = useCallback(async () => {
    setSession(null);
    stateLogout();
  }, []);

  return { login, logout, initialize, isLoggedIn, user };
};

export default useAuth;

import axiosInstance from "./axiosInstance";

export const getRandomGoogleColor = () => {
  const colors: string[] = ["gred", "gblue", "ggreen"];
  const color: string = colors[Math.floor(Math.random() * colors.length)];

  return color;
};

export const colorClassHelper = () => {};

export const isDev = (): boolean => {
  return process.env.NODE_ENV == "development";
};

export const setSession = (token: string | null) => {
  if (token) {
    localStorage.setItem("accessToken", token);
    axiosInstance.defaults.headers.common.Authorization = token;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
    localStorage.removeItem("accessToken");
  }
};

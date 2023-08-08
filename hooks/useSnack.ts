import React from "react";
import { toast } from "react-toastify";

type TypeOptions = "info" | "success" | "warning" | "error" | "default";
interface snackOptionsType {
  type?: TypeOptions;
}

const useSnack = () => {
  const enqueSnack = (message: string, { type }: snackOptionsType) => {
    toast(message, {
      type,
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  return {
    enqueSnack,
  };
};

export default useSnack;

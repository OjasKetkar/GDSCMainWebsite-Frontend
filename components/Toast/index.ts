import React from "react";
import { toast } from "react-toastify";

type ToastProps = {
  type: toas;
  message: any;
};

const ToastMessage = ({ type, message }:Toast) => toast[type](<div></div>);

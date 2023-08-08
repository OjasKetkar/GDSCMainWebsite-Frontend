import React, { FunctionComponent, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { setSession } from "../utils/helpers";

type ProviderProps = {
  children: React.ReactNode;
};

const JwtProvider = ({ children }: ProviderProps) => {
  const { initialize } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setSession(token);
    initialize();
  }, []);

  return <>{children}</>;
};

export default JwtProvider;

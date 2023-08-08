import type { NextPage } from "next";
import Image from "next/image";
import CustomInput from "../../../components/Form/CustomInput";
import { useEffect, useState } from "react";
import CustomButton from "../../../components/Form/CustomButton";

import useAuth, { loginParams } from "../../../hooks/useAuth";
import Router, { useRouter } from "next/router";

const Login: NextPage = () => {
  const [data, setData] = useState<loginParams>({
    email: "",
    password: "",
  });

  const { login, isLoggedIn } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    login(data);
  };

  useEffect(() => {
    if(isLoggedIn){
      Router.push("/admin/dashboard")
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="w-screen h-screen grid place-items-center">
        <div className="w-1/3 h-fit shadow-shadow1 rounded-lg flex flex-col p-5 items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <Image src="/Header_Logo.svg" height="60px" width="60px" />
            <h1 className="text-2xl font-medium">GDSC VIT PUNE ADMIN PANEL</h1>
          </div>
          <div className="w-4/5 flex flex-col gap-8">
            <CustomInput
              label="Email"
              onChange={handleChange}
              name="email"
              value={data.email}
            />
            <CustomInput
              label="Password"
              onChange={handleChange}
              name="password"
              value={data.password}
            />
          </div>
          <CustomButton onClick={handleLogin}>LOGIN</CustomButton>
        </div>
      </div>
    </>
  );
};

export default Login;

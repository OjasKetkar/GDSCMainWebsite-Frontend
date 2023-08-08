import Image from "next/image";
import React from "react";
import { sidebarkeys } from "./Sidebar.data";
import SidebarKey from "./SidebarKey";
import { useRouter } from "next/router";
import CustomButton from "../Form/CustomButton";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="w-72 m-4 shadow-shadow2 rounded-lg flex flex-col items-center p-5">
      <Image src="/LOGO_WHITE.png" alt="" width="150" height="150" />
      <h1>GDSC VIT PUNE</h1>

      <div className="w-full flex flex-col gap-3 mt-8 border-t-2 pt-5">
        {sidebarkeys.map((ky) => (
          <SidebarKey
            text={ky.text}
            link={ky.link}
            active={router.pathname === ky.link}
          />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          logout();
        }}
        className="mt-6"
      >
        LOGOUT
      </CustomButton>
    </div>
  );
};

export default Sidebar;

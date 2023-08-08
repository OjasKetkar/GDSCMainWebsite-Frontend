import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useRouter } from "next/router";
import { useBoundStore } from "../store/store";

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isLoggedIn } = useBoundStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 m-4">{children}</div>
    </div>
  );
};

export default AdminLayout;

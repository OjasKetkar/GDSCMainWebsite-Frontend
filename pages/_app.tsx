import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import JwtProvider from "../providers/JwtProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const [isAdminPath, setIsAdminPath] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("admin")) {
      setIsAdminPath(true);
    } else {
      setIsAdminPath(false);
    }
  }, [router]);

  if (isAdminPath && router.pathname == "/admin/login") {
    return (
      <div>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    );
  }

  if (isAdminPath) {
    return (
      <AdminLayout>
        <JwtProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </JwtProvider>
      </AdminLayout>
    );
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </MainLayout>
  );
}

export default MyApp;

import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {/* <div className="max-w-screen h-screen flex flex-col"> */}
        <Header />
        {/* <div className="w-full flex-1 overflow-y-auto p-2 md:p-4"> */}
          {children}
        {/* </div> */}
      {/* </div> */}
        <Footer />
    </>
  );
};

export default MainLayout;

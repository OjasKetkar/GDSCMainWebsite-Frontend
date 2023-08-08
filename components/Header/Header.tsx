import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import DisplayEvent from "../Events/DisplayEvent";

const Header = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <>
      <div className="w-screen h-14 z-50 flex items-center justify-center px-10 pt-5">
        <Head>
          <title>Google Developer Students Club</title>
        </Head>
        <div
          className={`bg-background h-14 w-14 rounded-full shadow-shadow1 flex items-center justify-center transition-all duration-500 ease-in-out ${
            active ? "rounded-lg w-[92vw] justify-between px-5 " : ""
          } `}
        
        >
          <Image
            src="/Header_Logo.svg"
            height="35px"
            width="35px"
            onClick={() => {
              setActive(!active);
            }}
          />

            {/* navbar */}
            <div className="navbar relative sm:gap-2 flex-col">
          <div
            className={`${
              !active ? "hidden" : "md:flex gap-8 "
            } animate-appear`}
          >
            <Link href="/">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                HOME
              </h1>
            </Link>
            <Link href="/blogs">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                BLOGS
              </h1>
            </Link>{" "}
            <Link href="/projects">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                PROJECTS
              </h1>
            </Link>{" "}
            <Link href="/events">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                EVENTS
              </h1>
            </Link>{" "}
            <Link href="/team">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                TEAM
              </h1>
            </Link>
            <Link href="/gallery">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                GALLERY
              </h1>
            </Link>{" "}
            {/* <Link href="/">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                ARCHIVES
              </h1>
            </Link>{" "} */}
            <Link href="/contact">
              <h1 className="text-sm font-normal cursor-pointer hover:text-gblue ">
                CONTACT US
              </h1>
            </Link>
          </div>
            </div>

          <div
            className={`flex gap-8 ${
              !active ? "hidden" : "flex"
            } animate-appear hover:cursor-pointer  `}
          >
            <Image src="/Terminal.png" height="30px" width="30px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

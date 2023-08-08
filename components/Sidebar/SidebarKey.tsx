import React, { FunctionComponent } from "react";
import Link from "next/link";

type Props = {
  text: string;
  link: string;
  active: boolean;
};

const SidebarKey: FunctionComponent<Props> = ({ text, link, active }) => {
  return (
    <Link href={link} >
      <div
        className={`w-full h-fit p-3 grid place-items-center cursor-pointer font-semibold ${
          active ? "bg-gblue text-white rounded-lg" : ""
        } `}
      >
        {text}
      </div>
    </Link>
  );
};

export default SidebarKey;

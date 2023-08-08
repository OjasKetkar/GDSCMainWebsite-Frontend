import React, { FunctionComponent, useEffect, useState } from "react";
import { Member } from "../../interfaces/team";
import { Icon } from "@iconify/react";
import { getRandomGoogleColor } from "../../utils/helpers";

type Props = {
  member: Member;
  color: string;
};

const TeamMember: FunctionComponent<Props> = ({ member, color }) => {
  //   const [color, setColor] = useState<string>("gblue");

  //   useEffect(() => {
  //     setColor(getRandomGoogleColor());
  //   }, []);

  return (
    <div
      className={`h-fit rounded-xl shadow-shadow1 flex flex-col items-center p-3 gap-2 group hover:animate-wobble2 ${
        color == "gred" ? "hover:bg-gred" : ""
      } ${color == "gblue" ? "hover:bg-gblue" : ""} ${
        color == "ggreen" ? "hover:bg-ggreen" : ""
      } transition-all duration-150 ease-in-out`}
    >
      <img
        src={member.image || 'https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg'}
        className="w-40 h-40 transition-all duration-700  ease-in rounded-full group-hover:animate-wobble object-cover "
        alt=""
      />
      <div className="w-full flex flex-col items-center gap-1 group-hover:text-white">
        <h1 className="text-lg font-medium">{member.fullname}</h1>
        <h1
          className={`text-sm ${color == "gred" ? "text-gred" : ""} ${
            color == "gblue" ? "text-gblue" : ""
          } ${
            color == "ggreen" ? "text-ggreen" : ""
          } font-semibold group-hover:text-white`}
        >
          {member.position}
        </h1>
        <div className="flex gap-3">
          <Icon icon="akar-icons:linkedin-box-fill" />
          <Icon icon="ant-design:github-filled" />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

import React, { FunctionComponent, MouseEventHandler, useState } from "react";
import { Icon } from "@iconify/react";
import TeamMemberModal from "./TeamMemberModal";
import axiosInstance from "../../utils/axiosInstance";


type Props = {
  member : any
};

const AdminTeamMember: FunctionComponent<Props> = ({member}) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const deleteMember =async () => {
    await axiosInstance.delete(`/team/deleteMember/${member._id}`);

    window.location.reload()
  }
  const toggleEditModal: MouseEventHandler = () => {
    setShowEditModal(!showEditModal);
  };
  return (
    <>
    <div className="w-full h-fit bg-white shadow-shadow1 rounded-lg p-2 hover:shadow-shadow2  ">
      <div className="flex gap-2">
        <img
          src={member?.image || "https://research.cbc.osu.edu/sokolov.8/wp-content/uploads/2017/12/profile-icon-png-898.png"}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex w-full justify-between">
            <h1 className="text-xl font-medium flex gap-3 items-center">
              {member.fullname}{" "}
              <Icon
                icon="ph:note-pencil-bold"
                className="w-5 h-5 "
                onClick={toggleEditModal}
              />
            </h1>
            <h1 className="w-fit h-fit py-0.5 px-2 bg-gblue text-xs font-semibold text-white rounded-sm">
              {member.team.toUpperCase()}
            </h1>
          </div>
          <h1 className="text-sm text-gray-400">{member.email}</h1>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <h1>{member.position}</h1>
        <div className="flex gap-2 items-center">
          <Icon icon="mdi:phone" />
          {member.mobileNumber}
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-3 mt-2">
            <a href={member.githubProfile} target="_blank" rel="noopener noreferrer">
              <Icon icon="ri:github-fill" className="w-5 h-5" />
            </a>
            <a href={member.linkedInProfile} target="_blank" rel="noopener noreferrer">
              <Icon icon="logos:linkedin-icon" className="w-5 h-5" />
            </a>
          </div>

          <Icon
            icon="material-symbols:delete-rounded"
            color="red"
            onClick={deleteMember}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
    <TeamMemberModal
        state={showEditModal}
        toggleModal={toggleEditModal}
        type="edit"
        member={member}
      />
    </>
  );
};

export default AdminTeamMember;

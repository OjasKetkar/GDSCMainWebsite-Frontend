import { NextPage } from "next";
import React, { MouseEventHandler, useEffect, useState } from "react";
import CustomButton from "../../../components/Form/CustomButton";
import CustomInput from "../../../components/Form/CustomInput";
import AdminTeamMember from "../../../components/Team/AdminTeamMember";
import TeamMemberModal from "../../../components/Team/TeamMemberModal";
import useTeams from "../../../hooks/useTeams";

const TeamPage: NextPage = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const { getTeamMembersByYear, team, loading } = useTeams();

  const toggleAddModal: MouseEventHandler = () => {
    setShowAddModal(!showAddModal);
  };

  useEffect(() => {
    if (!team) {
      getTeamMembersByYear(year);
    }
  }, [year]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value);
    setYear(selectedYear);
    getTeamMembersByYear(selectedYear); // Call getTeamMembersByYear with the selected year
  };

  if (loading || !team) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl">TEAM</h1>
        <CustomButton onClick={toggleAddModal}>ADD MEMBER</CustomButton>
      </div>
      <div style={{display : "inline-block"}}>
        <input
          type="text"
          className="border-2 mt-6 rounded-lg p-2 border-gray-400"
          placeholder="Search team members"
        />
        <select
          className="border-2 mt-6 mx-2 rounded-lg p-2 border-gray-400"
          value={year.toString()} // Set the initial value of the select element to the current year
          onChange={handleYearChange} // Call the handleYearChange function when the user selects a new year
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      {/* Lead */}
      <h1 className="text-3xl mt-4 mt-6">Lead</h1>
      <div className="w-full flex-1  mt-3 grid grid-cols-3 gap-6 p-3">
        {team?.lead?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m} />
        ))}
      </div>
      {/* Managers */}
      <h1 className="text-3xl mt-4">Manager</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.managers?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m} />
        ))}
      </div>
      {/* Heads */}
      <h1 className="text-3xl mt-4">Heads</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.heads?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m}  />
        ))}
      </div>
      {/* Web */}
      <h1 className="text-3xl mt-4">Web</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.web?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m}  />
        ))}
      </div>
      {/* Android */}
      <h1 className="text-3xl mt-4">Android</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.android?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m} />
        ))}
      </div>
      {/* Flutter */}
      <h1 className="text-3xl mt-4">Flutter</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.flutter?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m}  />
        ))}
      </div>
      {/* Management */}
      <h1 className="text-3xl mt-4">Management</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.management?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m} />
        ))}
      </div>
      {/* Multimedia */}
      <h1 className="text-3xl mt-4">Multimedia</h1>
      <div className="w-full flex-1 grid grid-cols-3 gap-6 p-3">
        {team?.multimedia?.map((m: any) => (
          <AdminTeamMember key={m._id} member={m} />
        ))}
      </div>
     
      <TeamMemberModal
        state={showAddModal}
        toggleModal={toggleAddModal}
        type="add"
      />
    </div>
  );
};

export default TeamPage;

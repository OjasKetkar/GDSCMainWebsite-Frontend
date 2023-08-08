import { NextPage } from "next";
import React, { MouseEventHandler, useState } from "react";
import CustomButton from "../../../components/Form/CustomButton";
import CustomInput from "../../../components/Form/CustomInput";
import AdminProjectCard from "../../../components/Projects/AdminProjectCard";
import ProjectModal from "../../../components/Projects/ProjectModal";

const ProjectsPage: NextPage = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const toggleAddModal: MouseEventHandler = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl">PROJECTS </h1>
        <CustomButton onClick={toggleAddModal}>ADD PROJECT</CustomButton>
      </div>
      <input
        type="text"
        className="border-2 mt-6 rounded-lg p-2 border-gray-400"
        placeholder="Search projects"
      />
      <div className="w-full flex-1 overflow-y-auto mt-6 grid grid-cols-3 gap-6 p-3">
        {[...Array(22)].map((member) => (
          <AdminProjectCard />
        ))}
      </div>
      <ProjectModal
        state={showAddModal}
        toggleModal={toggleAddModal}
        type="add"
      />
    </div>
  );
};

export default ProjectsPage;

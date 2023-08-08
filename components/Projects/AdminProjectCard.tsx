import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

type Props = {};

const AdminProjectCard: FunctionComponent<Props> = () => {
  return (
    <div className="w-full h-fit bg-white shadow-shadow1 rounded-lg p-2 hover:shadow-shadow2  ">
      <div className="flex flex-col gap-2">
        <img
          src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"
          alt=""
          className="w-full h-56 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex w-full justify-between">
            <h1 className="text-xl font-medium flex gap-3 items-center">
              NFT Marketplace{" "}
              <Icon icon="ph:note-pencil-bold" className="w-5 h-5 " />
            </h1>
            <h1 className="w-fit h-fit py-0.5 px-2 bg-gblue text-xs font-semibold text-white rounded-sm">
              WEB
            </h1>
          </div>
          <h1 className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            dolores suscipit quos voluptatum magnam maiores, voluptates possimus
            eveniet soluta. Nam animi commodi deleniti sed quae tenetur, vitae
            ad earum eum?
          </h1>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-3 mt-2">
            <Icon icon="ri:github-fill" className="w-5 h-5" />
            <Icon icon="logos:youtube-icon" className="w-5 h-5" />
            <Icon icon="mdi:web" className="w-5 h-5" />
          </div>

          <Icon
            icon="material-symbols:delete-rounded"
            color="red"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProjectCard;

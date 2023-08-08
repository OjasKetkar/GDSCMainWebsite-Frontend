import React,{useState,MouseEventHandler} from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomButton from "../Form/CustomButton";
import Router, { useRouter } from "next/router";
import EventModal from "./EventModal";
import axiosInstance from "../../utils/axiosInstance";
import EventDetails from "./EventDetails";

const EventCard = (props: {
  data: {_id:string, title: string; description: string; date: string; endDate: string , thumbnail:string};
}) => {
  // const router = useRouter();
  // console.log(router.query);
  let _endDate = new Date(props.data.endDate);
  let _startDate = new Date(props.data.date);

  
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleShowDetails: MouseEventHandler = () => {
    setShowDetails(!showDetails);
  };

  const toggleAddModal: MouseEventHandler = () => {
    setShowAddModal(!showAddModal);
  };

  const delteEventCard = async() => {
    const response = await axiosInstance.delete("/events/deleteEvent",{
      data:{
         "id":props.data._id
      }
    }
    )
    console.log("Deleted Response => ",response);
  }

  console.log("EventCard", props.data);
  return (
    <>
      <div key={props.data._id} className="h-fit w-full md:h-72 shadow-shadow1 mb-8 rounded-lg p-2 flex flex-col md:flex-row gap-8">
        <img
          // src={
          //   "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          // }
          src={props.data.thumbnail}
          className="w-full  md:w-2/5 h-full rounded-lg"
          alt=""
        />
        <div className="flex flex-col h-full justify-between items-start">
          <div className="flex justify-end">
          <h1 className="text-3xl font-bold text-gblue">{props.data.title}</h1>
            <Icon
              icon="ph:note-pencil-bold"
              color="black"
              className="w-5 h-5 cursor-pointer"
              style={{width:"60",scale:"1.5"}}
              onClick={toggleAddModal}
            />{"  "}
            <Icon
              icon="material-symbols:delete-rounded"
              color="red"
              className="w-5 h-5 cursor-pointer"
              style={{scale:"1.5"}}
              onClick={delteEventCard}
            />{" "}
          </div>
          <div>
            <h3 className="text-md text-textlight mt-5">
              {props.data.description}
            </h3>
            <h1 className="text-lg text-gred font-semibold mt-3">
              {/* {props.data.date} - {props.data.endDate.slice(0,10)} */}
              {_startDate.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} -{" "}
              {_endDate.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h1>
          </div>
          <CustomButton onClick={ toggleShowDetails }>DETAILS</CustomButton>
        </div>
        <EventModal
        state={showAddModal}
        toggleModal={toggleAddModal}
        type="update"
        oneEvent={props.data}
      />
      <EventDetails
      state={showDetails}
      toggleDetails={toggleShowDetails}
      data={props.data}
      />
      </div>
    </>
  );
};

export default EventCard;

import { NextPage } from "next";
import React, { MouseEventHandler, useState, useEffect } from "react";
import EventCard from "../../../components/Events/EventCard";
import CustomButton from "../../../components/Form/CustomButton";
import SingleCard from "../../../components/Events/SingleCard";
import EventModal from "../../../components/Events/EventModal";
import { get } from "http";
import Router from "next/router";


const EventsPage: NextPage = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEvents, setEvents] = useState<[]>([]);
console.log(showEvents)
  useEffect(()=>{
    const getEvents = async () => {
      const res = await fetch("http://localhost:5001/api/events/getEvents");
      const data = await res.json();
      // const eventData = data.events
      setEvents(data.events)
      // Router.push(
      // {
      //   query : data
      // }
      // )
  }
 getEvents();

  },[])
  
  const toggleAddModal: MouseEventHandler = () => {
    setShowAddModal(!showAddModal);
  };

  // staticProps().then((res)=> setEvents(res.props.data.events))
  // console.log("showEvents : "+showEvents);

  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl">Events </h1>
        <CustomButton onClick={toggleAddModal}>ADD Events</CustomButton>
      </div>
      <input
        type="text"
        className="border-2 mt-6 rounded-lg p-2 border-gray-400"
        placeholder="Search Events"
      />

<div className="w-full flex-1 overflow-y-auto mt-6 grid gap-6 p-3">
        {showEvents.map((event) => (
          <EventCard data={event} />
        ))}

        {
          // showEvents.map((event)=><EventCard {showEvents} />)
        }
        
      </div>
      <EventModal
        state={showAddModal}
        toggleModal={toggleAddModal}
        type="add"
        oneEvent={showEvents}
      />
    </div>
  );
};

export default EventsPage;

import { NextPage } from "next";
import React from 'react'
import {useEffect,useState} from "react";
import { Icon } from "@iconify/react";
import EventCard from "../../components/Events/EventCard";
import AllEvents from "../../components/Events/AllEvents";
import Lottie from "react-lottie";
import * as animaton from "../../assets/event.json";

const Event: NextPage = () => {

  const [showEvents, setEvents] = useState<[]>([]);
  useEffect(()=>{
    const getEvents = async () => {
    const res = await fetch("http://localhost:5001/api/events/getEvents");
    const data = await res.json();
    setEvents(data.events);
  }
 getEvents();
  },[])

  return (
    <>
      <div className="min-w-7xl mx-auto max-w-7xl" >
        <div className="flex justfy-center items-center max-w-screen flex-wrap p-4 m-4">
          <div className="w-1/2 flex justify-center">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animaton,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={"80%"}
              width={"80%"}
            />
          </div>
          <div className="w-1/2 flex flex-col justify-start">
            <div className="text-3xl text-slate-500 mb-4 font-medium">
              EVENTS
            </div>
            <div className="mt-4">
              <Icon
                icon="gridicons:quote"
                style={{ color: "red", fontSize: "54px" }}
              />
            </div>
            <div className="w-2/3 mt-1 font-normal text-base text-slate-600">
              If your actions create a legacy that inspires others to dream
              more, learn more, do more and become more, then, you are an
              excellent leader
            </div>
          </div>
        </div>

        {/* {showEvents.map((event)=> <EventCard data={event} /> )}   */}
        <AllEvents />
      </div>
    </>
  );
};

export default Event;

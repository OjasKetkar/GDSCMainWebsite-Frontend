import { NextPage } from "next";
import { useState,useEffect } from "react";
import SingleCard from "./SingleCard";
import EventCard from "./EventCard";
import Router from "next/router";


const AllEvents: NextPage =  (props) => {
  let [showEvents, setEvents] = useState<any>([]);
  useEffect(()=>{

    const getEvents = async () => {
    const res = await fetch("http://localhost:5001/api/events/getEvents");
    const data = await res.json();
    setEvents(data.events);
  }
 getEvents();
  },[])
  
  const [eventType, setEvent] = useState<string>("ALLEVENTS");
  // console.log("................",showEvents)
  let data : string ;


  let date = new Date().toLocaleDateString;
  
  // console.log(date.toLocaleDateString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  if(eventType=="UPCOMING"){
     let upcoming = showEvents.filter((event:any) => event.status=="UPCOMING" )
     console.log("upcoming",upcoming)
     showEvents = upcoming
  }
  if(eventType=="ONGOING"){
    let ongoing = showEvents.filter((event:any)=> event.status=="ONGOING" )
    console.log("ongoing",showEvents)
    showEvents = ongoing
  }
 if(eventType=="PAST"){
  let past = showEvents.filter((event:any) => event.status=="PAST" )
  console.log("past",past);
  showEvents = past;
}
  return (
    <>
      <div className="text-3xl text-center text-slate-500 font-medium">
        ALL EVENTS
      </div>
      <div className="flex mt-6 flex-wrap ">
        <button
          onClick={() => setEvent("ALLEVENTS")}
          className={` ${
            eventType === "ALLEVENTS"
              ? "bg-gblue text-white"
              : "bg-slate-50 shadow-shadow2 text-gblue"
          } font-medium text-sm w-36 mx-6 px-4 rounded-full py-1 mt-2`}
        >
          ALL
        </button>
        <button
          onClick={() => setEvent("ONGOING")}
          className={` ${
            eventType === "ONGOING"
              ? "bg-purple-500 text-white"
              : "bg-slate-50 shadow-shadow2 text-purple-500"
          } font-medium text-sm w-36 mx-6 px-4 rounded-full py-1 mt-2`}
        >
          ONGOING
        </button>
        <button
          onClick={() => setEvent("PAST")}
          className={` ${
            eventType === "PAST"
              ? "bg-red-500 text-white"
              : "bg-slate-50 shadow-shadow2 text-red-500"
          } font-medium text-sm  w-36 mx-6 px-4 rounded-full py-1 mt-2`}
        >
          PAST
        </button>
        <button
          onClick={() => setEvent("UPCOMING")}
          className={` ${
            eventType === "UPCOMING"
              ? "bg-ggreen text-white"
              : "bg-slate-50 shadow-shadow2 text-ggreen"
          } font-medium text-sm w-36 mx-6px-4 rounded-full py-1 mt-2`}
        >
          UPCOMING
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 mt-8">
        {/* <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard /> */}
        
        {showEvents.map((event:any)=> <SingleCard data={event} />)}
       
      </div>
    </>
  );
};

export default AllEvents;

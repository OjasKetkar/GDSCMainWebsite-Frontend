import React, { FunctionComponent, useState, MouseEventHandler } from "react";

import Modal from "../Modal/Modal";
import CustomButton from "../Form/CustomButton";
import Link from "next/link";

type Props = {
  state: boolean;
  toggleDetails: MouseEventHandler<HTMLElement>;
  data: any;
};

const EventDetails: FunctionComponent<Props> = ({
  state,
  data,
  toggleDetails,
}) => {
  console.log("state is : ", state);
  console.log("EventDetails : ", data);

  return (
    //   <Modal
    //     open={state}
    //     toggleModal={toggleDetails}
    //     modalClass="w-3/5 h-140 flex flex-col items-center"
    //   >
    //     <div className="flex flex-row gap-6 justify-between">
    //     <h1 className="text-xl font-semibold">
    //       {data.title}
    //     </h1>
    //     </div>
    //        <div className="flex flex-col items-center">
    //         <img
    //           src={data.thumbnail}
    //           alt=""
    //           className="w-32 h-32 rounded-full object-cover"
    //         />
    //         </div>
    //         <br />
    //       <h1 className="text-xl font-semibold">
    //      {data.title}
    //     </h1>
    //     <br />
    //     <div className="grid grid-cols-2 gap-6 gap-y-8 w-full ">
    //         <h1 className='text-l font-semibold'>Venue{" :- "}{data.venue}{"  "}</h1>
    //         <h1 className='text-l font-semibold'>Status{" :- "}{data.status}</h1>
    //         <h1 className='text-l font-semibold'>Registration Link : </h1>
    //         <a target='blank' className='text-sky-500 font-semibold' href={data.registrationLink}>{data.registrationLink}</a>
    //   </div>
    //   <br />
    //   <div className="grid grid-cols-1 gap-6 gap-y-8 w-full ">
    //      <h1 className='text-l font-semibold'>  Description :-  {data.description}  </h1> <br />
    //   </div>
    //   <div className="grid grid-cols-2 gap-6 gap-y-8 w-full">
    //   {data.schedule.map((day:any,index:any)=>{
    //       return(
    //       <div key={day}>
    //           <h1 className='text-l font-semibold'>Day {index+1} :- {day.date} </h1>
    //           <br />
    //           {day.slots.map((slot:any,ind:any)=>{
    //               return(
    //               <div key={ind} className="grid grid-cols-2 gap-6 gap-y-8 w-full">
    //                    <h1 className='text-l font-semibold'>Slot {ind+1} :- </h1>
    //                    <h1 className='text-l font-semibold'>{slot.start} - {slot.end} </h1>
    //               </div>
    //               )
    //           })}
    //           </div>
    //       )
    //   })}
    // </div>
    //   </Modal>

    <Modal
      open={state}
      toggleModal={toggleDetails}
      modalClass="w-3/5 h-140 flex flex-col items-center"
    >
      <div className="flex flex-row gap-6 justify-between">
        <h1 className="text-xl font-semibold">Event Details</h1>
      </div>
      <div className="flex w-full gap-6 mt-8">
        <div className="flex flex-col items-center">
          <img
            src={data.thumbnail}
            alt=""
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <form className="flex-1 flex flex-col items-center gap-5">
          <div className="grid grid-cols-2 gap-6 gap-y-8 w-full">
              <h1 className="bg-background1 text-blue-500 font-medium w-auto border-b-2 border-b-black ">Event Name</h1>
              <h1 className="bg-background1 text-blue-500 font-semibold w-auto border-b-2 border-b-black ">{data.title}</h1>
              <h1 className="bg-background1 text-green-500 font-medium w-auto border-b-2 border-b-black ">Event Venue</h1>
              <h1 className="bg-background1 text-green-500 font-semibold w-auto border-b-2 border-b-black ">{data.venue}</h1>
          </div>
          {/* <div>
          <h1 className="bg-background1  font-medium w-auto">Description :- {"  "} {data.description}</h1>
          </div> */}
          <div className="grid grid-cols-2 gap-6 gap-y-8 flex text-center w-full">
              {data.schedule.map((day:any,index:any)=>{
                return(
                  <div key={index}>
                    {/* <span>Day {index+1} : </span> */}
                 <input
                 type="date"
                 name="eventDate"
                 value={day.date}
                 className="font-bold"
               />
               <br />
               <br />
               {day.slots.map((slot:any,ind:any)=>{
                  return(
                    <div key={ind} className="grid grid-cols-3 gap-6 gap-y-8 w-full">
                    <span className="font-bold">Slot - {ind+1} : </span> 
                         <input
                            key={ind}
                            type="time"
                            name="start"
                            value={slot.start}
                            className="font-bold"
                          />
                          
                          <input
                            key={ind}
                            type="time"
                            name="end"
                            value={slot.end}
                            className="font-bold"

                          />
                          
                    </div>
                
                  )
                
               })}
               </div>
                )
              })}
          </div>
         
        </form>
        
      </div>
      <div>
        <br />
          <h1 className="bg-background1 mx-6 font-medium w-auto"> <b>Description :-   {"  "}</b> {data.description}</h1>
          </div>
          <br />
          <Link href={data.registrationLink} target="blank" >
          <CustomButton onClick={()=>{}}>Register</CustomButton>
          </Link>
    </Modal>

    // <Modal
    //   open={state}
    //   toggleModal={toggleDetails}
    //   modalClass="w-3/5 h-140 flex flex-col items-center overflow-x-scroll"
    // >
      
    // </Modal>
  );
};

export default EventDetails;

import React,{MouseEventHandler,useState} from "react";
import Image from "next/image";
import EventCard from "./EventCard";
import Link from "next/link";
import EventDetails from "./EventDetails";

const SingleCard = (props: { data : {title:string,thumbnail:string} }) => {
  const tags = ["Offline", "web" , "Development"];
  console.log("From single card : ",props.data);

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleShowDetails: MouseEventHandler = () => {
    setShowDetails(!showDetails);
  };

  
  return (
    <>
      <div className="w-full h-80 rounded-lg overflow-hidden shadow-shadow1 hover:shadow-shadow2 group">
        <img
          // src={
          //   "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          //   // `props.data.image.data`
          // }
          src={props.data.thumbnail}
          className="w-full h-3/4 object-cover group-hover:h-3/5 transition-all duration-200 ease-in-out "
          // width="100%"
          // height="80%"
          // objectFit="cover"
        />
        <div className="px-2 py-1 mb-2">
          <div className="font-bold text-2xl text-ggreen mb-2">
            {props.data.title}
          </div>
          {tags.map((tag) => {
            return (
              <>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:bg-gred hover:text-white cursor-default">
                  {tag}
                </span>
              </>
            );
          })}
        </div>

        <div className="mt-1">
          <button className="w-full bg-gblue  text-sm font-medium text-white h-10" onClick={toggleShowDetails} >
            Read More
          </button>
        </div>
        <EventDetails
        state={showDetails}
        toggleDetails={toggleShowDetails}
        data={props.data}
        />
      </div>
    </>
  );
};

export default SingleCard;

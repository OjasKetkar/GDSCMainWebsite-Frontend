import { NextPage } from "next";
import React, { MouseEventHandler, useState, useEffect } from "react";
import EventCard from "../../../components/Events/EventCard";
import CustomButton from "../../../components/Form/CustomButton";
import SingleCard from "../../../components/Events/SingleCard";
import ImageModal from "../../../components/Gallery/ImageModal";
import axiosInstance from "../../../utils/axiosInstance";

import { Icon } from "@iconify/react";
import Lottie from "react-lottie";
import GridLayout, { WidthProvider } from "react-grid-layout";
import { galleryImages } from "../../../utils/data";
import GalleryImage from "../../../components/Gallery/GalleryImage";
import { getRandomGoogleColor } from "../../../utils/helpers";


const RGrid = WidthProvider(GridLayout);

const GalleryPage: NextPage = () => {


    
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  
// console.log(showImages)

const [images, setImages] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    const res = await axiosInstance.get("/gallery/getImages/");
    console.log(res.data.images);   
    setImages(res.data.images);
  };

  fetchImages();
}, []);


  
  const toggleAddModal: MouseEventHandler = () => {
    setShowAddModal(!showAddModal);
  };
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
    { i: "b", x: 2, y: 0, w: 1, h: 1, static: true },
    { i: "c", x: 3, y: 0, w: 2, h: 1, static: true },
    { i: "d", x: 5, y: 0, w: 2, h: 2, static: true },
    { i: "e", x: 2, y: 1, w: 3, h: 2, static: true },
    { i: "f", x: 0, y: 2, w: 2, h: 1, static: true },
    { i: "g", x: 0, y: 3, w: 1, h: 1, static: true },
    { i: "h", x: 1, y: 3, w: 3, h: 1, static: true },
    { i: "i", x: 4, y: 3, w: 1, h: 1, static: true },
    { i: "j", x: 5, y: 2, w: 2, h: 2, static: true },
  ];

  const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  
  
  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl">Gallery </h1>
        <CustomButton onClick={toggleAddModal}>ADD Images</CustomButton>
      </div>


<div className="w-full flex-1 overflow-y-auto mt-6 grid gap-6 p-3">
        {/* {showImages.map((image) => (
          <EventCard data={image} />
        ))} */}

        <h1 className="text-4xl mt-5 mb-1 font-medium" >Gallery</h1>
      <h1 className="text-textlight text-xl mb-3"  >A collection of our memories !</h1>
      
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {images.map((image,id) => (
          <BlurImage key={keys[id]} image={image} />
        ))}
      </div>
    </div>
        

        
      </div>
      <ImageModal
        state={showAddModal}
        toggleModal={toggleAddModal}
        type="add"
      />
    </div>
  );
};

export default GalleryPage;



function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function BlurImage({ image }: { image: Image }) {

  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
        <img
          alt=""
          src={image.image}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75'
          )}
          
        />
        
        <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-24
                                group-hover:translate-x-4">
                                <div className="p-2">
                                    <p className="text-lg text-black">
                                        {image.title}
                                    </p>
                                    </div></div>
      </div>
      
    </div>
  )
}



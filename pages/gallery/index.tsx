import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";



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


const Gallery: NextPage = () => {

  const [images, setImages] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    const res = await axiosInstance.get("/gallery/getImages/");
    console.log(res.data.images);   
    setImages(res.data.images);
  };

  fetchImages();
}, []);
 
  const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {images.map((image,id) => (
          <BlurImage key={keys[id]} image={image} />
        ))}
      </div>
    </div>
  )
};

export default Gallery;

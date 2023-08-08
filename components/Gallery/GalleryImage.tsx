import React, { FunctionComponent, useState, useEffect } from "react";
import { GalleryImage } from "../../interfaces/gallery";

type Props = {
  image: GalleryImage;
};

const GalleryImage: FunctionComponent<Props> = ({ image }) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden group">
      <img src={image.image} className="h-full w-full object-cover" alt="" />
      <div className="w-full h-full hidden bg-black absolute top-0 rounded-lg opacity-50 text-white group-hover:grid place-items-center font-semibold">
        <h1 >{image.title}</h1>
      </div>
    </div>
  );
};

export default GalleryImage;

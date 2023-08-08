import React, { FunctionComponent } from "react";
import { Blog } from "../../interfaces/blogs";

type Props = {
  blog: Blog;
};

const getRandomColor = ()=>{
  const colorArr = ['gblue','gred','ggreen'];
  const randomNumber : number = Math.floor(Math.random()*10)%3;
  return colorArr[randomNumber];
}

const HBlog: FunctionComponent<Props> = ({ blog }) => {
  return (
    <>
      <div className="card w-4/5 relative left-8 flex-1 flex gap-5 hover:scale-105 transition-all duration-150 ease-in-out">
        <img
          src={blog.imageUrl}
          className={`w-2/6 h-full object-cover rounded-xl `}
          alt=""
        />
        <div className="flex flex-col justify-between">
          
          <a href={blog.link} target="_blank">
          <h1 className="text-xl font-semibold mt-2 hover:cursor-pointer hover:text-blue-400">{blog.title}</h1>
          </a>
          
          <div className="category">
          <h1 className={`truncate text-xs bg-${getRandomColor()} w-fit rounded font-medium text-white mr-2 p-1 lg:p-2`}>{blog.tags}</h1>
        </div>
         
          <div className="flex items-center gap-2  ">
            <div>
              <h1 className="text-sm">{blog.author}</h1>
              <h1 className="text-xs text-textlight">{blog.date}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HBlog;

import React, { FunctionComponent, useState } from "react";
import { Blog,BlogTag } from "../../../interfaces/blogs";

type Props = {
  blog: Blog;
  reversed?: boolean;
};

const BlogCard: FunctionComponent<Props> = ({ blog, reversed }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={`w-full relative h-64 rounded-xl shadow-shadow1 flex gap-5 transition-all duration-300 p-2 ease-in-out hover:flex-col ${
        reversed ? "flex-row" : ""
      } ${active ? "p-0" : ""} `}
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <img
        src={blog.imageUrl}
        className={`h-full w-2/4 object-cover rounded-xl transition-all duration-300 ease-in-out ${
          active ? "w-[100%]" : ""
        }`}
        alt=""
      />

      <div
        className={`h-full transition-all duration-300 ease-in-out flex flex-col justify-between  ${
          active
            ? "h-full w-full rounded-lg absolute backdrop-brightness-50 top-0 text-white p-3"
            : ""
        }`}
      >
        <div>
          <h1
            className={`text-4xl font-medium ${
              active ? "font-bold text-5xl opacity-75" : ""
            } `}
          >
            {blog.title}
          </h1>
          <h1 className={`text-textlight mt-2 ${active ? "text-white" : ""} `}>
            {blog.description}
          </h1>
          <div
            className={`mt-3 w-fit h-fit px-3 py-0 rounded bg-gred text-white ${
              active ? "bg-white text-black" : ""
            } `}
          >
            {blog.category}
          </div>
        </div>
        {active ? (
          <div className="flex gap-8 mb-2">
            <button className="bg-glass rounded backdrop-brightness-50 px-8 font-semibold py-1 hover:bg-[#ffffff83] ">
              GITHUB
            </button>
            <button className="bg-glass rounded backdrop-brightness-50 px-8 font-semibold py-1 hover:bg-[#ffffff83] ">
              VIEW DETAILS
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogCard;

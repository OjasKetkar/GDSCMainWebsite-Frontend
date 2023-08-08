import React, { FunctionComponent } from "react";
import { IBlog } from "../../interfaces/blogs";

type Props = {
  blog: IBlog;
};

const getRandomColor = () => {
  const colorArr = ["gblue", "gred", "ggreen"];
  const randomNumber: number = Math.floor(Math.random() * 10) % 3;
  return colorArr[randomNumber];
};

const VBlog: FunctionComponent<Props> = ({ blog }) => {

  return (
    <>
      <div className="card w-full relative left-6 md:h-65 w-full flex-2 flex flex-col gap-3 hover:shadow-shadow1 rounded-xl transition-all duration-150 ease-in-out hover:-translate-y-2">
        <img
          src={blog.thumbnail}
          className="w-100 md:w-100 p-2 h-60 object-cover rounded-xl "
          alt=""
        />

        <div className="flex flex-col justify-between gap-2 p-2">
          <div className="flex gap-4"></div>

          <a href={blog.link} target="_blank">
            <h1 className="text-xl font-semibold sm:text-lg hover:text-blue-400 ">
              {blog.title.length <27
                ? blog.title 
                : blog.title.slice(0, 27) + " ..."}{" "}
            </h1>
          </a>
          <div className="tags flex justify-start items-center text-center">
            {blog.categories.length >= 1 && (
              <>
                <h1
                  className={`truncate text-xs bg-${getRandomColor()} font-medium w-4/6 rounded text-white mr-2 p-2 lg:p-1 w-full font-medium`}
                >
                  {blog.categories[0].toUpperCase()}
                </h1>
              </>
            )}
          </div>

          <div className="flex items-center gap-2  ">
            <div>
              <h1 className="text-xs text-textlight">{blog.author}</h1>
              <h1 className="text-xs text-textlight">
                {blog.pubDate.slice(0, 10)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VBlog;

// import { NextPage } from "next";
// import React, { MouseEventHandler, useState } from "react";
// import BlogCard from "../../../components/Blogs/BlogCard"
// import CustomButton from "../../../components/Form/CustomButton";
// // import SingleBlogCard from "../../../components/Blogs/SingleBlogCard";

// const staticProps = async () => {
//     const res = await fetch("http://localhost:5001/api/events/getEvents");
//     const data = await res.json();
//     console.log("welcome to the Blog Page : ",data.events[0].title);
//     return {
//       props : {
//          data
//       }
//     }
// }

// const BlogsPage: NextPage = () => {
//   const [showAddModal, setShowAddModal] = useState<boolean>(false);

//   staticProps();

//   const toggleAddModal: MouseEventHandler = () => {
//     setShowAddModal(!showAddModal);
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-start">
//       <div className="flex w-full justify-between">
//         <h1 className="text-4xl">Blogs </h1>
//         <CustomButton onClick={toggleAddModal}>ADD Blogs</CustomButton>
//       </div>
//       <input
//         type="text"
//         className="border-2 mt-6 rounded-lg p-2 border-gray-400"
//         placeholder="Search Events"
//       />

// <div className="w-full flex-1 overflow-y-auto mt-6 grid gap-6 p-3">
//         {[...Array(10)].map((event) => (
//           <BlogCard />
//         ))}
//       </div>
    
//     </div>
//   );
// };

// export default BlogsPage;

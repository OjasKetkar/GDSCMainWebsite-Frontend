// import React, { FunctionComponent , useState} from "react";
// const medium = require('@giuseppecampanelli/medium-api')
// const categories = medium.publication.getRecentPosts('dscvitpune')

// // categories.then((res: any) => {
// //     console.clear()
// //     console.log(res[0].title)
 
// // })

// const BlogFilter: FunctionComponent = () => {
//   const [blogType , setBlog] = useState<string>("ALL");
//   return (

//     // <div className="flex gap-5 items-center">
//     //   <div className="bg-gblue py-0.5 px-6 rounded-full text-background">
//     //     ALL
//     //   </div>
//     //   <div className="bg-background border-2 border-gblue py-0.5 px-6 rounded-full text-gblue">
//     //     AI/ML
//     //   </div>
//     //   <div className="bg-background border-2 border-gblue py-0.5 px-6 rounded-full text-gblue">
//     //     Blockchain
//     //   </div>
//     // </div>
    
//     <div className="flex mt-6 flex-wrap ">
//     <button
//       onClick={() => setBlog("ALL")}
//       className={` ${
//         blogType === "ALL"
//           ? "bg-gblue text-white"
//           : "bg-slate-50 shadow-shadow2 text-gblue"
//       } font-medium text-sm w-36 mx-6 px-4 rounded-full py-1 mt-2`}
//     >
//       ALL
//     </button>
//     <button
//       onClick={() => setBlog("AI/ML")}
//       className={` ${
//         blogType === "AI/ML"
//           ? "bg-purple-500 text-white"
//           : "bg-slate-50 shadow-shadow2 text-purple-500"
//       } font-medium text-sm w-36 mx-6 px-4 rounded-full py-1 mt-2`}
//     >
//       AI/ML
//     </button>
//     <button
//       onClick={() => setBlog("Blockchain")}
//       className={` ${
//         blogType === "Blockchain"
//           ? "bg-red-500 text-white"
//           : "bg-slate-50 shadow-shadow2 text-red-500"
//       } font-medium text-sm  w-36 mx-6 px-4 rounded-full py-1 mt-2`}
//     >
//       Blockchain
//     </button>
//     <button
//       onClick={() => setBlog("Development")}
//       className={` ${
//         blogType === "Development"
//           ? "bg-ggreen text-white"
//           : "bg-slate-50 shadow-shadow2 text-ggreen"
//       } font-medium text-sm w-36 mx-6px-4 rounded-full py-1 mt-2`}
//     >
//       Development
//     </button>
//   </div>
//   );
// };

// export default BlogFilter;

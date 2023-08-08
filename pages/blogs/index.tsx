// import BlogFilter from "../../components/Blogs/old/BlogFilter";
import Link from "next/link";
import HBlog from "../../components/Blogs/HBlog";
import VBlog from "../../components/Blogs/VBlog";
import { useState, useEffect } from "react";
import { IBlog } from "../../interfaces/blogs";
import Lottie from "react-lottie";
import * as animaton from "../../assets/event.json";
import { Icon } from "@iconify/react";

const blogs = [
  {
    id : "",
    category: "",
    imageUrl: "https://cdn-images-1.medium.com/max/1024/0*XHbX_vxYdvbbZoCp",
    title: "Flutter: The Future of App Development?",
    date: "2022-10-23 08:56:39",
    author: "Dirgh Patodia",
    link: "https://medium.com/dscvitpune/flutter-the-future-of-app-development-5e35b79bee6d?source=rss----5f2ce570a9ff---4",
    tags: "App Development"
  },
  {
    id : "",
    category: "",
    imageUrl:
      "https://cdn-images-1.medium.com/max/940/1*UCUC3yHNJkG0XZn38duDRg.png",
    title: "Kotlin vs Flutter vs React Native",
    date: "2023-01-31 03:28:46",
    author: "Ashish Fargade",
    link: "https://medium.com/dscvitpune/kotlin-vs-flutter-vs-react-native-45b895c6f823?source=rss----5f2ce570a9ff---4",
    tags: "App Devlopment"
  },
  {
    id : "",
    category: "",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/0*9ToWmeRH2_mgrDss",
    title: "Beginners Guide To Next.js",
    date: "Mar 28, 2022",
    author: "Vedant Gokhale",
    link: "https://medium.com/dscvitpune/beginners-guide-to-next-js-3173af0494e3",
    tags: "Web Development"
  },
];




const Blogs = () => {
  const [data, setData] = useState<IBlog[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dscvitpune"
    )
      .then((res) => res.json())
      .then((data) => setData(data.items))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className="parent">
        <div className="min-w-7xl mx-auto max-w-7xl flex flex-col items-center sm:w-full">
          <div className="md:topline flex mt-10">
        <div className="hidden w-1/2 flex justify-center md:flex">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animaton,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={"80%"}
              width={"80%"}
            />
          </div>
          <div className="mx-11 mb-5 md:w-1/2 flex flex-col justify-center">
            <div className="text-4xl text-center text-slate-500 md:text-5xl text-slate-500 mb-5 font-medium">
              Blogs
            </div>
            <div className="mt-4 hidden md:flex">
              <Icon
                icon="gridicons:quote"
                style={{ color: "red", fontSize: "54px" }}
              />
            </div>
            <div className="md:mt-1 font-normal text-xl text-slate-600">
              Helping students bridge the gap between theory and practice
            </div>
          </div>

          </div>
          <div className="flex w-12/12 flex-col mb:20 h-full gap-8 md:flex-row md:gap-2 md:w-full md:h-[70vh]">
            <div className="flex-1 flex justify-center">
              <div className="card w-4/5  relative justify-center h-full shadow-shadow1 hover:shadow-shadow2 cursor-pointer rounded-2xl p-3 flex flex-col justify-between gap-2">
                <div>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*XlTup5VZVFeiyFaSfD8ZEA.jpeg"
                    alt=""
                  />
                  <Link href="https://medium.com/dscvitpune/introduction-to-docker-e284632ad40e">
                    <a target="_blank">
                      <h1 className="text-xl font-medium hover:text-blue-400 mt-2 lg:relative top-5 text-2xl">
                        Introduction To Docker
                      </h1>
                    </a>
                  </Link>
                </div>

                <div className="desc">

                  <h1 className="sm:text-sm text-textlight lg:hidden ">Have you ever been through scenarios when an installation gives you errors...</h1>
                </div>
                
                <h1 className="truncate text-xs bg-ggreen w-fit rounded-lg text-white mr-2 p-2 lg:relative bottom-5 p-2">Development</h1>
                <div className="flex items-center gap-5">
                  <div>
                    <h1 className="text-sm text-textlight lg:relative bottom-5">Rewa Wader</h1>
                    <h1 className="text-xs text-textlight lg:relative bottom-5">Dec 1, 2021</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative left-3 md:flex-1 flex flex-col relative right-6 gap-5 md:p-5">
              {
                blogs?.map((blog,index)=>{
                  return(
                    <>
                  <HBlog key={index} blog={blog} />
                    </>
                  )
                })
              }
            </div>
          </div>

          <div className="w-11/12 md:w-full mt-12 flex items-center gap-12">
            <h1 className="text-slate-500 font-bold relative right-8 text-2xl md:text-2xl relative left-10 top-10 text-slate-500 font-bold ">ALL BLOGS</h1>
          </div>
          <div className="grid grid-cols-1 relative right-6 md:w-full grid grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 p-10">
            {data?.map((blog:IBlog,index:number) => {
              return(
                <>
                <VBlog key={index} blog={blog} />
                </>
            )})
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

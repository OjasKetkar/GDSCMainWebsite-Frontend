import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <div className="max-w-screen">
        <div className="mx-20 mt-24">
          <div className="flex">
            <div className="w-1/2">
              <div className=" mt-6 text-4xl text-slate-600 font-medium">
                CONTACT US
              </div>

              <div>
                <div className="mt-8">
                  <Icon
                    icon="gridicons:quote"
                    style={{ color: "red", fontSize: "54px" }}
                  />
                </div>
              </div>
              <div className="w-2/3 mt-1 font-normal text-base text-slate-500">
                If your actions create a legacy that inspires others to dream
                more, learn more, do more and become more, then, you are an
                excellent leader
              </div>
              <div className="flex mt-8">
                <div>
                <Link href="/">
                  <Image
                    src={"/linkedin.svg"}
                    height="48px"
                    width="48px"
                    ></Image>
                </Link>
                </div>
                <div className="mx-2 hover:cursor-pointer">
                <Link href="/" className="mx-2 hover:cursor-pointer">
                  <Image
                    src={"/twitter.svg"}
                    height="48px"
                    width="48px"
                  ></Image>
                </Link>
                </div>
                <div className="mx-2 hover:cursor-pointer">
                <Link href="/" className="mx-2 hover:cursor-pointer">
                  <Image
                    src={"/youtube.svg"}
                    height="48px"
                    width="48px"
                  ></Image>
                </Link>
                </div>
                <div className="mx-2 hover:cursor-pointer">
                <Link href="/" className="mx-2 hover:cursor-pointer">
                  <Image
                    src={"/discord.svg"}
                    height="48px"
                    width="48px"
                  ></Image>
                </Link>
                </div>
                <div className="mx-2 hover:cursor-pointer">
                <Link href="/" className="mx-2 hover:cursor-pointer">
                  <Image src={"/github.svg"} height="48px" width="48px"></Image>
                </Link>
                
               
                </div>
                <div className="mx-2 hover:cursor-pointer">
                <Link href="/" className="mx-2 hover:cursor-pointer">
                  <Image
                    src={"/facebook.svg"}
                    height="48px"
                    width="48px"
                  ></Image>
                </Link>
                </div>
               
            
                
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="border-b border-black py-1 w-3/4">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="border-b border-black py-1 w-3/4  mt-6">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="border-b border-black py-1 w-3/4 mt-6">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="border-b border-black py-1 w-3/4 mt-6 ">
                <textarea
                  rows={4}
                  cols={50}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
                  placeholder="Message"
                />
              </div>

              <div className="my-12">
                <button className="w-3/4 text-white bg-gblue h-8 rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

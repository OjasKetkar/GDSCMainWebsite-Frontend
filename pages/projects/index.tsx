import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import Lottie from "react-lottie";
import * as animaton from "../../assets/project.json";
import ProjectCard from "../../components/Projects/ProjectCard";
import { projects } from "../../utils/data";

const Projects: NextPage = () => {

  
  return (
    <>
      <div className="min-w-7xl mx-auto max-w-7xl flex flex-col items-center">
        <div className="w-full flex h-[60vh]">
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-6xl text-text mb-4 font-medium">PROJECTS</div>
            <div className="mt-4">
              <Icon
                icon="bxs:quote-alt-left"
                style={{ color: "#EA4336", fontSize: "54px" }}
              />
            </div>
            <div className="w-4/5 mt-1 text-xl font-normal text-textlight">
              If your actions create a legacy that inspires others to dream
              more, learn more, do more and become more, then, you are an
              excellent leader
            </div>
          </div>
          <div className="flex-1 grid place-items-center">
            <div className="w-4/5 h-full/12 ">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animaton,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 w-full gap-7 grid-col-1  lg:grid grid-cols-2">
          {[...Array(5)].map((item, idx) => (
            <ProjectCard project={projects[0]} reversed={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import Lottie from "react-lottie";
import * as animaton from "../../assets/team.json";
import TeamMember from "../../components/Team/TeamMember";
import { member1 } from "../../utils/data";
import { getRandomGoogleColor } from "../../utils/helpers";
import { useEffect, useState } from "react";
import useTeams from "../../hooks/useTeams";

const Team: NextPage = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const { getTeamMembersByYear, team, loading } = useTeams();

  useEffect(() => {
    if (!team) {
      getTeamMembersByYear(year);
    }
  }, [year]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value);
    setYear(selectedYear);
    getTeamMembersByYear(selectedYear); // Call getTeamMembersByYear with the selected year
    console.log(team);
  };

  return (
    <>
      <div className="min-w-7xl mx-auto max-w-7xl flex flex-col items-center">
        <div className="w-full flex flex-row-reverse h-[60vh]">
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-6xl text-text mb-4 font-medium">
              WE ARE ONE TEAM
            </div>
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
        <div className="w-full flex justify-end mt-12">
          <div>
            <select
              className="border-2 mt-6 mx-2 rounded-lg p-2 border-gray-400"
              value={year.toString()} // Set the initial value of the select element to the current year
              onChange={handleYearChange} // Call the handleYearChange function when the user selects a new year
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        <div className="w-full flex-1 overflow-y-auto mt-6 mb-6 grid grid-cols-3 gap-6 p-3" >
          {loading || !team ? (
            <p>Loading...</p>
          ) : (
            team?.lead?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          )}

          {
            team?.managers?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
              ))
            }

          {
            team?.heads?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          }

          {
            team?.web?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          }
          
          {
            team?.android?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          }

          
          {
            team?.flutter?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          }

          {
            team?.management?.map((m : any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          }

          {
            team?.multimedia?.map((m: any) => (
              <TeamMember member={m} color={getRandomGoogleColor()} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Team;

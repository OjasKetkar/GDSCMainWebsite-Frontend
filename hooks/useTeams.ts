import React, { useCallback, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import useSnack from "./useSnack";

const useTeams = () => {
  const [team, setTeam] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { enqueSnack } = useSnack();

  const getTeamMembersByYear = useCallback(async (year: number) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/team/getTeam/${year}`);
      console.log(res);
      setTeam(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const addTeamMember = useCallback(async () => {}, []);

  const deleteTeamMember = useCallback(async () => {}, []);

  return {
    getTeamMembersByYear,
    addTeamMember,
    deleteTeamMember,
    loading,
    team,
  };
};

export default useTeams;

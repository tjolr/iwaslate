import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import styled from "styled-components";
import { Participant } from "../types/Participants";
import ParticipantItem from "./ParticipantItem";
import { useEffect } from "preact/hooks";
import { getAllLatecomingsForUser } from "../supabase/supabaseApi";

const ParticipantOverview = () => {
  useEffect(() => {
    const resAndy = getAllLatecomingsForUser(
      "54476c5a-bf93-4a0d-bd2d-b47aa2404dde"
    );
    const resTjol = getAllLatecomingsForUser(
      "b6df065c-3139-4702-83bc-4f0bc72c0554"
    );

    console.log(resAndy, resTjol);
  }, []);

  const participants: Participant[] = [
    {
      name: "Anders",
      earnedAmount: 60,
      ppu: 150,
    },
    {
      name: "Tjøl",
      earnedAmount: 80,
      ppu: 180,
    },
  ];

  return (
    <Wrapper>
      {participants.map((participant: Participant) => (
        <ParticipantItem {...participant} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 2rem 0rem;
`;

export default ParticipantOverview;

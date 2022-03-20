import React, { FunctionComponent } from "react";
import { Playground } from "Components/Playground";
import { NoAudioMessage } from "Components/NoAudioMessage";
import { useAudioContext } from "Components/AudioContextProvider";

export const Home: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};

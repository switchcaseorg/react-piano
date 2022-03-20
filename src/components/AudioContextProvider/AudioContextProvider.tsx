import { useRef } from "react";
import { Optional } from "Domains/types";
import { accessContext } from "Domains/audio";

export function useAudioContext(): Optional<AudioContextType> {
  const AudioCtx = useRef(accessContext())
  return AudioCtx.current
}
  
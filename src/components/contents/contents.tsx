"use client";

import { AudioCheckboxPlayer } from "../audio-checkbox-player/audio-checkbox-player";
import { currentPreparation } from "./contents.atom";
import { useAtomValue } from "jotai";

export const Contents = () => {
  const preparation = useAtomValue(currentPreparation);

  return (
    <div className="p-4 flex justify-center flex-col items-center">
      <AudioCheckboxPlayer title={preparation.name} preparation={preparation} />
    </div>
  );
};

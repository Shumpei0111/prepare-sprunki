"use client";

import { sprunkis } from "@/feature/settings/data";
import { useState } from "react";
import { AudioCheckboxPlayer } from "../audio-checkbox-player/audio-checkbox-player";

interface PreparationItemType {
  label: string;
  done: boolean;
  sprunki: (typeof sprunkis)[keyof typeof sprunkis];
}

export interface PreparationType {
  name: string;
  preparation: PreparationItemType[];
}

export const Settings = () => {
  const morningPreparation = [
    {
      label: "あさごはん",
      done: false,
      sprunki: sprunkis.Oren,
    },
    {
      label: "おきがえ",
      done: false,
      sprunki: sprunkis.Raddy,
    },
    {
      label: "はみがき",
      done: false,
      sprunki: sprunkis.Clukr,
    },
    {
      label: "うわぎをきる",
      done: false,
      sprunki: sprunkis.FunBot,
    },
  ] satisfies PreparationItemType[];

  const morning: PreparationType = {
    name: "あさのみじたく",
    preparation: morningPreparation,
  };

  const [currentPreparation, setCurrentPreparation] =
    useState<PreparationType>(morning);

  return (
    <div className="p-4 flex justify-center flex-col items-center">
      <AudioCheckboxPlayer
        title={currentPreparation.name}
        preparation={currentPreparation}
      />
    </div>
  );
};

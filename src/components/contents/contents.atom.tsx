import { sprunkis } from "@/feature/settings/data";
import { atom } from "jotai";

export interface PreparationItemType {
  label: string;
  done: boolean;
  sprunki: (typeof sprunkis)[keyof typeof sprunkis];
}

export interface PreparationType {
  name: string;
  preparation: PreparationItemType[];
}

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
    sprunki: sprunkis.Cluker,
  },
  {
    label: "くつしたをはく",
    done: false,
    sprunki: sprunkis.Vineria,
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

export const currentPreparation = atom<PreparationType>(morning);

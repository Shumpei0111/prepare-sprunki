import {
  bathTimePreparation,
  morningPreparation,
  sprunkis,
} from "@/feature/settings/data";
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

export const morning: PreparationType = {
  name: "あさのみじたく",
  preparation: morningPreparation,
};

export const bathTime: PreparationType = {
  name: "おふろ",
  preparation: bathTimePreparation,
};

export const currentPreparation = atom<PreparationType>(morning);

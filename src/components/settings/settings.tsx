"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAtomValue, useSetAtom } from "jotai";
import { MenuIcon } from "lucide-react";
import {
  bathTime,
  currentPreparation,
  morning,
} from "../contents/contents.atom";

export const Settings = () => {
  const current = useAtomValue(currentPreparation);
  const setPreparation = useSetAtom(currentPreparation);
  const handleChange = (name: string) => {
    if (name === "あさのみじたく") {
      setPreparation(morning);
    } else {
      setPreparation(bathTime);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <button
            className="grid grid-cols-[16px_1fr] gap-2"
            onClick={() => handleChange("あさのみじたく")}
          >
            <span>{current.name === "あさのみじたく" ? "✅️" : " "}</span>
            <span>あさのみじたく</span>
          </button>
        </div>
        <div>
          <button
            className="grid grid-cols-[16px_1fr] gap-2"
            onClick={() => handleChange("おふろ")}
          >
            <span>{current.name === "おふろ" ? "✅️" : " "}</span>
            <span>おふろ</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

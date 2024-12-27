"use client";

import { useState, useRef, useEffect } from "react";
import { type PreparationType } from "@/components/settings/settings";
import Image from "next/image";
import classNames from "classnames";

export const AudioCheckboxPlayer = ({
  title,
  preparation,
}: {
  title?: string;
  preparation: PreparationType;
}) => {
  const [playingTracks, setPlayingTracks] = useState<string[]>([]);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  useEffect(() => {
    Object.entries(preparation.preparation).forEach(([name, data]) => {
      const audio = new Audio(data.sprunki.music);
      audio.loop = true;
      audio.volume = 0.5;
      audioRefs.current[name] = audio;
    });

    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, [preparation.preparation]);

  const handleCheckboxChange = (trackName: string) => {
    setPlayingTracks((prev) => {
      if (prev.includes(trackName)) {
        audioRefs.current[trackName]?.pause();
        return prev.filter((name) => name !== trackName);
      } else {
        audioRefs.current[trackName]?.play();
        return [...prev, trackName];
      }
    });
  };

  return (
    <div>
      {title && (
        <h1 className="text-2xl font-bold text-gray-300">
          {title}
          {"("}
          {`${playingTracks.length}/${preparation.preparation.length}`}
          <span className="text-[1rem]"> points</span>
          {")"}
        </h1>
      )}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Object.entries(preparation.preparation).map(([name, data]) => (
          <label
            key={name}
            className="flex flex-col flex-wrap items-center space-y-2 p-4 rounded-lg"
            htmlFor={`track-${name}`}
          >
            <Image
              src={data.sprunki.image}
              alt={`${name} image`}
              width={100}
              height={180}
              className={classNames(
                !playingTracks.includes(name) ? "grayscale" : undefined,
                "duration-200 h-[180px] w-[110px] object-contain object-bottom rounded-lg hover:cursor-pointer"
              )}
            />
            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                id={`track-${name}`}
                checked={playingTracks.includes(name)}
                onChange={() => handleCheckboxChange(name)}
                className="opacity-0 absolute"
              />
              <span className="grid grid-cols-1 md:grid-cols-[20px_1fr] gap-1">
                <span>{playingTracks.includes(name) ? "✅️" : "▢"}</span>
                <span className="">{data.label}</span>
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

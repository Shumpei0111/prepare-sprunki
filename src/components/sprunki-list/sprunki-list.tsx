import { sprunkis } from "@/feature/settings/data";
import Image from "next/image";

export const SprunkiList = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-4 fixed top-full left-1/2 -translate-x-1/2 -translate-y-full w-full p-10 bg-black">
      {Object.entries(sprunkis).map(([key, sprunki]) => (
        <li key={key} className="flex flex-col items-center">
          <Image
            src={sprunki.image}
            alt={key}
            width={50}
            height={50}
            className="h-[50px] w-[50px] object-contain object-bottom"
          />
          {/* <audio src={sprunki.music} controls /> */}
          <p className="text-md text-gray-400 leading-4 pt-2">{key}</p>
          <p className="text-xs text-gray-500">type: {sprunki.type}</p>
        </li>
      ))}
    </ul>
  );
};

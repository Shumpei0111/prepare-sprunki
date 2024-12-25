"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function Clock() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-5xl font-bold text-gray-300">
        {time.format("HH:mm:ss")}
      </div>
      <div className="mt-2 text-gray-400">{time.format("MMがつDDにち")}</div>
    </div>
  );
}

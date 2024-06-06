import dayjs from "dayjs";
import { useEffect, useState } from "react";
export const LiveClock = () => {
  const [time, setTime] = useState(dayjs().format("hh:mm:ss"));

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(dayjs().format("hh:mm:ss"));
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <h1 className="text-9xl">{time}</h1>
    </div>
  );
};

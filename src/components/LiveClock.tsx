import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { useEffect, useState } from "react";
export const LiveClock = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [time, setTime] = useState(dayjs.tz().format("HH:mm:ss"));


  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(dayjs.tz().format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="py-16 ">
      <h1 className="text-8xl p-0 leading-none ">{time}</h1>
    </div>
  );
};

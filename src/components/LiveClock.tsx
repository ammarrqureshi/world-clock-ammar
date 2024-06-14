import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { useEffect, useState } from "react";
export const LiveClock = () => {
  const [time, setTime] = useState(dayjs.tz().format("HH:mm:ss"));
  dayjs.extend(utc);
  dayjs.extend(timezone);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(dayjs.tz().format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className=" ">
      <h1 className="text-9xl">{time}</h1>
    </div>
  );
};

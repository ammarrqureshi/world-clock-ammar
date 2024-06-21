import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { createContext, useState } from "react";

const TimezoneContext = createContext(undefined);
dayjs.extend(utc);
dayjs.extend(timezone);
export const TimeZoneProvider = ({ children }) => {
  const [timezone, setTimezone] = useState(dayjs.tz.guess());

  return (
    <TimezoneContext.Provider value={{ timezone, setTimezone }}>
      {children}
    </TimezoneContext.Provider>
  );
};

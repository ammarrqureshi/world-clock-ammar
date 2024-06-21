import { ReactNode, createContext, useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export interface TimezoneContextProps {
  timezone: string;
  setTimezone: React.Dispatch<React.SetStateAction<string>>;
}

dayjs.extend(utc);
dayjs.extend(timezone);

export const TimezoneContext = createContext<TimezoneContextProps | undefined>(
  undefined
);

export const TimezoneProvider = ({ children }: { children: ReactNode }) => {
  const [timezone, setTimezone] = useState<string>(dayjs.tz.guess());

  return (
    <TimezoneContext.Provider value={{ timezone, setTimezone }}>
      {children}
    </TimezoneContext.Provider>
  );
};

import { ReactNode, createContext, useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

const TimezoneContext = createContext(undefined);
dayjs.extend(utc);
dayjs.extend(timezone);
export const TimezoneProvider = ({children}: {children: ReactNode}) => {
  const [timezone, setTimezone] = useState<string>(dayjs.tz.guess());

return (
  "hello world"
)
};

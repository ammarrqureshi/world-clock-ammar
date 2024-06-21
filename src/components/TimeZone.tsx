import { useContext } from "react";
import {
  TimezoneContext,
  TimezoneContextProps,
} from "../contexts/TimezoneContext";

export const TimeZone = () => {
  const { timezone } = useContext(TimezoneContext) as TimezoneContextProps;

  return <div className="text-lg text-black/60">{timezone}</div>;
};

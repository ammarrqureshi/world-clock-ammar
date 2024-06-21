import * as dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import {
  TimezoneContext,
  TimezoneContextProps,
} from "../contexts/TimezoneContext";

export const Date = () => {
  const timezone = useContext(TimezoneContext) as TimezoneContextProps;
  const [date, setDate] = useState(dayjs.tz().format("dddd, DD MMMM, YYYY"));

  useEffect(() => {
    setDate(dayjs.tz().format("dddd, DD MMMM, YYYY"));
  }, [timezone]);
  return <div>{date}</div>;
};

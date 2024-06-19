import * as dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";

export const Date = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [date, setDate] = useState(dayjs.tz().format("dddd, DD MMMM, YYYY"));

  return <div>{date}</div>;
};

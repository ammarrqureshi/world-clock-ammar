import * as dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const Date = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const date = dayjs.tz().format("dddd, DD MMMM, YYYY");
  return <div>{date}</div>;
};

import * as dayjs from "dayjs";

export const Date = () => {


  const date = dayjs.tz().format("dddd, DD MMMM, YYYY");
  return <div>{date}</div>;
};

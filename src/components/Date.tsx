import * as dayjs from "dayjs";
const current_date = dayjs().format("dddd, DD MMMM, YYYY");
export const Date = () => {
  return <div>{current_date}</div>;
};

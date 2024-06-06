import * as dayjs from "dayjs";
export const Date = () => {
  return <div>{dayjs().get("d")}</div>;
};

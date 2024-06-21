import arrowDown from "../assets/arrow-down.png";
import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  TimezoneContext,
  TimezoneContextProps,
} from "../contexts/TimezoneContext";
import { url } from "inspector";

export const EditForm = ({ setIsVisible }: { setIsVisible: () => void }) => {
  const { timezone, setTimezone } = useContext(
    TimezoneContext
  ) as TimezoneContextProps;

  dayjs.tz.setDefault(timezone);

  const supportedTimezones = Intl.supportedValuesOf("timeZone");
  const [selected, setSelected] = useState(timezone);
  const getSelectedTimezone = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelected(event.target.value);
  };
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimezone(selected);
    setIsVisible();
  };

  return (
    <div className="fixed w-screen h-screen">
      <div
        id="form-backdrop"
        onClick={() => setIsVisible()}
        className=" bg-white/90 w-full h-full"
      ></div>
      <div className=" px-24 py-14  z-30 border-4 border-black br-sketch bg-white flex flex-col gap-6 justify-center items-left absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        Change your timezone
        <form
          action=""
          method="post"
          onSubmit={formSubmitHandler}
          className="flex gap-8 justify-between"
        >
          <select
            style={{
              background: `url(${arrowDown}) no-repeat`,
              backgroundPosition: "calc(100% - 10px) center",
              backgroundSize: "20px",
              appearance: "none",
            }}
            className=" pointer br-sketch border-4  relative border-black pl-6 py-4 bg-transparent"
            id="timezones"
            name="timezones"
            value={selected}
            onChange={getSelectedTimezone}
          >
            {supportedTimezones.map((timezone: string, index: number) => (
              <option key={index} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
          <button type="submit">Change</button>
        </form>
      </div>
    </div>
  );
};

import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  TimezoneContext,
  TimezoneContextProps,
} from "../contexts/TimezoneContext";

export const EditForm = () => {
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
  };

  return (
    <div className="fixed w-screen h-screen">
      <div id="form-backdrop" className=" bg-white/90 w-full h-full"></div>
      <div className=" px-24 py-14  z-30 border-4 border-black br-sketch bg-white flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <form
          action=""
          onSubmit={formSubmitHandler}
          className="flex gap-8 justify-between"
        >
          <select
            className="br-sketch border-4  border-black px-6 py-4  bg-transparent"
            id="timezones"
            name="timezones"
            value={timezone}
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

import dayjs from "dayjs";
import { ChangeEvent, useContext } from "react";
import {
  TimezoneContext,
  TimezoneContextProps,
} from "../contexts/TimezoneContext";

export const TimeZone = () => {
  const { timezone, setTimezone } = useContext(
    TimezoneContext
  ) as TimezoneContextProps;

  dayjs.tz.setDefault(timezone);

  const supportedTimezones = Intl.supportedValuesOf("timeZone");

  const getSelectedTimezone = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setTimezone(event.target.value);
  };

  return (
    <div>
      {timezone}
      <div>
        <form action="">
          <select
            className="br-sketch border-4  border-black px-6 py-4  bg-transparent"
            onChange={getSelectedTimezone}
            id="timezones"
            name="timezones"
          >
            {supportedTimezones.map((timezone: string, index: number) => (
              <option key={index} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

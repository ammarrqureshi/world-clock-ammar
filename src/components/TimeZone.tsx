import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { ChangeEvent, useState } from "react";

export const TimeZone = () => {
  const [selectedRegion, setSelectedRegion] = useState(dayjs.tz.guess());
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault(selectedRegion);

  const supportedTimezones = Intl.supportedValuesOf("timeZone");

  const getSelectedTimezone = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedRegion(event.target.value);
  };

  return (
    <div>
      {selectedRegion}
      <div>
        <form action="">
          <select
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

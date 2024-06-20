import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { ChangeEvent, useState } from "react";

export const TimeZone = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [selectedRegion, setSelectedRegion] = useState<string>(
    dayjs.tz.guess()
  );

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

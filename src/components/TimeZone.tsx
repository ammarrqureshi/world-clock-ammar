import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React, { useState } from "react";

export const TimeZone = (time: string) => {
  const [selectedRegion, setSelectedRegion] = useState("America/Toronto");
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault(selectedRegion);

  const supportedTimezones = Intl.supportedValuesOf("timeZone");





  return (
    <div>
      {selectedRegion}
      <div>
        <form action="">
        <select id="timezones" name="timezones">
        {supportedTimezones.map((timezone:string, index:any) => (
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

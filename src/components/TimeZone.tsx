import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React, { useState } from "react";

export const TimeZone = () => {
  const [selectedRegion, setSelectedRegion] = useState("America/Toronto");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const timestamp = "2014-06-01 12:00"
  const tz = "America/New_York"
  
  const dayjsLocal = dayjs(timestamp); //assumes UTC
  //dayjsLocal.toISOString() -> 2014-06-01T12:00:00.000Z
  //dayjsLocal.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00
  
  const dayjsAmerica = dayjsLocal.tz(tz) 

  return (
    <div>
      {selectedRegion} {dayjsAmerica.format('HH:mm:ss')}
    </div>
  );
};

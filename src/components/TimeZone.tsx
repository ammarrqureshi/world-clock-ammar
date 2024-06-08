import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React, { useState } from "react";

export const TimeZone = (time: string) => {
  const [selectedRegion, setSelectedRegion] = useState("America/Toronto");
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault(selectedRegion);

  return <div>{selectedRegion}</div>;
};

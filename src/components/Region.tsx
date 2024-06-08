import React, { useState } from "react";


export const Region = () => {
const [selectedRegion, setSelectedRegion] = useState("Europe/Germany")

return( <div>

{selectedRegion}
  </div>);

};

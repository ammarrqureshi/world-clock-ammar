import { useState } from "react";
import { Date } from "./components/Date";
import { EditForm } from "./components/EditForm";
import { LiveClock } from "./components/LiveClock";
import { TimeZone } from "./components/TimeZone";
import { EditButton } from "./components/ui/EditButton";
export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="flex justify-center h-screen w-full items-center ">
        <div className="flex flex-col lg:min-w-[800px] m-4  justify-center items-center br-sketch border-4 border-black py-10 px-28">
          <div className=" w-full flex gap-6 items-center justify-end">
            <TimeZone />

            <EditButton
              onClick={() => {
                setIsVisible(true);
              }}
            />
          </div>

          {isVisible && (
            <EditForm
              setIsVisible={() => {
                setIsVisible(false);
              }}
            />
          )}

          <LiveClock></LiveClock>
          <Date />
        </div>
      </div>
    </>
  );
};

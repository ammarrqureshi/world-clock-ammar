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
      <div className="flex justify-center h-screen w-full items-center">
        <div className="flex flex-col  justify-center items-center br-sketch border-4 border-gray-900 p-8 rounded-xl">
          <div className="flex gap-6 items-center">
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

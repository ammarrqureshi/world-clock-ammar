import { EditButton } from "./components/ui/EditButton";
import { LiveClock } from "./components/LiveClock";
import { Date } from "./components/Date";
import { TimeZone } from "./components/TimeZone";
export const App = () => {
  return (
    <>
      <div className="flex justify-center h-screen w-full items-center">
        <div className="flex flex-col  justify-center items-center br-sketch border-4 border-gray-900 p-8 rounded-xl">
          <TimeZone />
          <EditButton />

          <LiveClock></LiveClock>
          <Date />
        </div>
      </div>
    </>
  );
};

import { Button } from "./components/ui/Button";
import { LiveClock } from "./components/LiveClock";
import { Date } from "./components/Date";
import { TimeZone } from "./components/TimeZone";
import { Select } from "./components/ui/Select";
export const App = () => {
  return (
    <>
      <div className="flex justify-center h-screen w-full items-center">
        <div className="flex flex-col  justify-center items-center br-sketch border-4 border-gray-900 p-8 rounded-xl">
          <TimeZone />
          <Button />

          <Select></Select>
          <LiveClock></LiveClock>
          <Date />
        </div>
      </div>
    </>
  );
};

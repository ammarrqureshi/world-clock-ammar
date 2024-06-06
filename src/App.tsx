import { Button } from "./components/ui/Button";
import { LiveClock } from "./components/LiveClock";
import { Date } from "./components/Date";
export const App = () => {
  return (
    <>
      <div className="flex justify-center h-screen w-full items-center">
        <div className="flex flex-col  justify-center items-center border border-gray-900 p-8 rounded-xl">
          <Button />
          <LiveClock></LiveClock>
          <Date />
        </div>
      </div>
    </>
  );
};

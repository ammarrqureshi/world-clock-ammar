import { Date } from "./components/Date";
import { EditForm } from "./components/EditForm";
import { LiveClock } from "./components/LiveClock";
import { TimeZone } from "./components/TimeZone";
import { EditButton } from "./components/ui/EditButton";
export const App = () => {
  return (
    <>
      <div className="flex justify-center h-screen w-full items-center">
        <div className="flex flex-col  justify-center items-center br-sketch border-4 border-gray-900 p-8 rounded-xl">
          <TimeZone />
          <EditForm />
          <EditButton />
          <LiveClock></LiveClock>
          <Date />
        </div>
      </div>
    </>
  );
};

import { Button } from "./components/ui/Button";
import { LiveClock } from "./components/LiveClock";
import { Date } from "./components/Date";
export const App = () => {
  return (
    <>
      <div className="">
        <Button/>
        <LiveClock></LiveClock>
<Date/>        
      </div>
    </>
  );
};

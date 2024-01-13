import Availability from "../availability/Availability";
import ScheduleKitchenBasztowa from "../scheduleKitchenBasztowa/ScheduleKitchenBasztowa";
import ShiftCounter from "../shiftCounter/ShiftCounter";
import "./kitchenBasztowa.css";

function KitchenBasztowa() {
  return (
    <div className="main">
      <div className="schedule-container">
        <ScheduleKitchenBasztowa />
        <ShiftCounter />
      </div>
      <Availability />
    </div>
  );
}

export default KitchenBasztowa;

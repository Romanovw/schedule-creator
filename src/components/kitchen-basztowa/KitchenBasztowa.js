import ScheduleKitchenBasztowa from '../scheduleKitchenBasztowa/ScheduleKitchenBasztowa';
import ShiftCounter from '../shiftCounter/ShiftCounter';
import './kitchenBasztowa.css';

function KitchenBasztowa() {
    return (
          <div className='schedule-container'>
            <ScheduleKitchenBasztowa/>
            <ShiftCounter/>
          </div>
      );
}

export default KitchenBasztowa;
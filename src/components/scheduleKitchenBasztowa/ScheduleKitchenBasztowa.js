import './scheduleKitchenBasztowa.css';

function ScheduleKitchenBasztowa() {
    return (
          <table id="schedule" className="schedule">
            <caption className='caption'>
              Grafik od <input type='text' placeholder='dd/mm'/> do <input type='text' placeholder='dd/mm'/>
            </caption>
            <tr>
              <th><span>Poniedziałek</span></th>
              <th><span>Wtorek</span></th>
              <th><span>Środa</span></th>
              <th><span>Czwartek</span></th>
              <th><span>Piątek</span></th>
              <th><span>Sobota</span></th>
              <th><span>Niedziela</span></th>
            </tr>
            <tr>
              <td className="time"><span contenteditable="true">10:30 - 18:00</span></td>
              <td className="time"><span contenteditable="true">10:30 - 18:00</span></td>
              <td className="time"><span contenteditable="true">10:30 - 18:00</span></td>
              <td className="time"><span contenteditable="true">10:30 - 18:00</span></td>
              <td className="time"><span contenteditable="true">10:30 - 18:00</span></td>
              <td className="time"><span contenteditable="true">11:00 - 18:00</span></td>
              <td className="time"><span contenteditable="true">11:00 - 18:00</span></td>
            </tr>
            <tr>
              <td className="cell mon1" contentEditable={true}></td>
              <td className="cell tue1" contentEditable={true}></td>
              <td className="cell wed1" contentEditable={true}></td>
              <td className="cell thu1" contentEditable={true}></td>
              <td className="cell fri1" contentEditable={true}></td>
              <td className="cell sat1" contentEditable={true}></td>
              <td className="cell sun1" contentEditable={true}></td>
            </tr>
            <tr>
              <td className="cell mon1" contentEditable={true}></td>
              <td className="cell tue1" contentEditable={true}></td>
              <td className="cell wed1" contentEditable={true}></td>
              <td className="cell thu1" contentEditable={true}></td>
              <td className="cell fri1" contentEditable={true}></td>
              <td className="cell sat1" contentEditable={true}></td>
              <td className="cell sun1" contentEditable={true}></td>
            </tr>
            <tr>
              <td className="cell mon1" contentEditable={true}></td>
              <td className="cell tue1" contentEditable={true}></td>
              <td className="cell wed1" contentEditable={true}></td>
              <td className="cell thu1" contentEditable={true}></td>
              <td className="cell fri1" contentEditable={true}></td>
              <td className="cell sat1" contentEditable={true}></td>
              <td className="cell sun1" contentEditable={true}></td>
            </tr>
            <tr>
              <td className="time"><span contenteditable="true">18:00 - 01:00</span></td>
              <td className="time"><span contenteditable="true">18:00 - 01:00</span></td>
              <td className="time"><span contenteditable="true">18:00 - 01:00</span></td>
              <td className="time"><span contenteditable="true">18:00 - 01:00</span></td>
              <td className="time"><span contenteditable="true">18:00 - 01:00</span></td>
              <td className="time"><span contenteditable="true">18:00 - 01:00</span></td>
              <td className="time"><span contenteditable="true">18:00 - 00:00</span></td>
            </tr>
            <tr>
              <td className="cell mon2" contentEditable={true}></td>
              <td className="cell tue2" contentEditable={true}></td>
              <td className="cell wed2" contentEditable={true}></td>
              <td className="cell thu2" contentEditable={true}></td>
              <td className="cell fri2" contentEditable={true}></td>
              <td className="cell sat2" contentEditable={true}></td>
              <td className="cell sun2" contentEditable={true}></td>
            </tr>
            <tr>
              <td className="cell mon2" contentEditable={true}></td>
              <td className="cell tue2" contentEditable={true}></td>
              <td className="cell wed2" contentEditable={true}></td>
              <td className="cell thu2" contentEditable={true}></td>
              <td className="cell fri2" contentEditable={true}></td>
              <td className="cell sat2" contentEditable={true}></td>
              <td className="cell sun2" contentEditable={true}></td>
            </tr>
            <tr>
              <td className="cell mon2" contentEditable={true}></td>
              <td className="cell tue2" contentEditable={true}></td>
              <td className="cell wed2" contentEditable={true}></td>
              <td className="cell thu2" contentEditable={true}></td>
              <td className="cell fri2" contentEditable={true}></td>
              <td className="cell sat2" contentEditable={true}></td>
              <td className="cell sun2" contentEditable={true}></td>
            </tr>
          </table>
        
      );
}

export default ScheduleKitchenBasztowa;
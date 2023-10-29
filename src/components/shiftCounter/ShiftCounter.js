import './shiftCounter.css'

const data = [
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  { person: '', countSh: '' },
  
];

const ShiftCounter = () => {
  return (
    <table id="countSh" className="countSh">
      <thead>
        <tr>
          <th>Pracownik</th>
          <th>Ilość zmian</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="per1"></td>
          <td id="countSh1"></td>
        </tr>
        <tr>
          <td id="per2"></td>
          <td id="countSh2"></td>
        </tr>
        <tr>
          <td id="per3"></td>
          <td id="countSh3"></td>
        </tr>
        <tr>
          <td id="per4"></td>
          <td id="countSh4"></td>
        </tr>
        <tr>
          <td id="per5"></td>
          <td id="countSh5"></td>
        </tr>
        <tr>
          <td id="per6"></td>
          <td id="countSh6"></td>
        </tr>
        <tr>
          <td id="per7"></td>
          <td id="countSh7"></td>
        </tr>
        <tr>
          <td id="per8"></td>
          <td id="countSh8"></td>
        </tr>
        <tr>
          <td id="per9"></td>
          <td id="countSh9"></td>
        </tr>
        <tr>
          <td id="per10"></td>
          <td id="countSh10"></td>
        </tr>
        <tr>
          <td id="per11"></td>
          <td id="countSh11"></td>
        </tr>
        <tr>
          <td id="per12"></td>
          <td id="countSh12"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ShiftCounter;
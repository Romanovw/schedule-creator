import './availability.css';
import React, { useState } from 'react';

const Availability = () => {
    const [employees, setEmployees] = useState([
      { id: 1, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 2, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 3, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 4, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 5, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 6, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 7, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 8, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 9, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 10, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 11, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 12, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 13, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 14, name: '', shifts: Array(14).fill(false), wholeDay: false },
      { id: 15, name: '', shifts: Array(14).fill(false), wholeDay: false },
    ]);
  
    const handleInputChange = (employeeId, field, value) => {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === employeeId ? { ...employee, [field]: value } : employee
        )
      );
    };
  
    const handleShiftChange = (employeeId, shiftIndex) => {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === employeeId
            ? {
                ...employee,
                shifts: employee.shifts.map((shift, index) =>
                  index === shiftIndex ? !shift : shift
                ),
              }
            : employee
        )
      );
    };
  
    return (
      <section>
        <table id="availability" className="availability">
          <caption>Dyspozycja</caption>
          <tr>
            <th className="names">
              Pracownik <button id="nameAuto"> Wypełnić automatycznie</button>
            </th>
            {/* Заголовки для дней недели */}
            {/* Помните, что у вас 14 смен, поэтому используйте colspan="2" для каждого дня */}
            {/* Заголовок для "Zgoda na całość" */}
          </tr>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input
                  type="text"
                  placeholder="Imię pracownika"
                  value={employee.name}
                  onChange={(e) =>
                    handleInputChange(employee.id, 'name', e.target.value)
                  }
                />
                <button className="full" onClick={() => console.log('Full')}>
                  Full
                </button>
              </td>
              {employee.shifts.map((shift, index) => (
                <td key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={shift}
                      onChange={() => handleShiftChange(employee.id, index)}
                    />
                    {index % 2 === 0 ? ' 1 zm' : ' 2 zm'}
                  </label>
                </td>
              ))}
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={employee.wholeDay}
                    onChange={() =>
                      handleInputChange(
                        employee.id,
                        'wholeDay',
                        !employee.wholeDay
                      )
                    }
                  />
                  zgoda
                </label>
              </td>
            </tr>
          ))}
        </table>
      </section>
    );
  };

export default Availability;
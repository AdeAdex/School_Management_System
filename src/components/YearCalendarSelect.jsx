import React, { useState } from "react";

const YearCalendarSelect = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1950;
    const years = [];

    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };
  return (
    <>
      <div>
        <label htmlFor="yearSelect">Select a year:</label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {generateYearOptions()}
        </select>
        <h2>{selectedYear} Calendar</h2>
        <div>
          {/* Display your calendar here */}
          {/* Example: */}
          <table>
            <thead>
              <tr>
                <th>January</th>
                <th>February</th>
                <th>March</th>
                {/* Add the remaining months */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                {/* Add the remaining days */}
              </tr>
              {/* Add the remaining weeks */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default YearCalendarSelect;

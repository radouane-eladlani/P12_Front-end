import React, { useState } from 'react';
import '../css/selects.css'; 

const ReusableSelect = ({ options, label, changeValue }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    changeValue(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <select 
        value={selectedOption} 
        onChange={handleSelectChange} 
        className="custom-select"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReusableSelect;

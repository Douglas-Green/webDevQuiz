/** @format */

import React from "react";

const Option = ({ option, selected, onChange }) => {
  return (
    <div>
      <input
        type='radio'
        name='option'
        value={option}
        checked={selected}
        onChange={onChange}
      />
      <span>{option}</span>
    </div>
  );
};

export default Option;

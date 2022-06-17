import React from 'react';

const MySelect = ({options, defaultVal, value, onChange}) => {
  return (
    <select
      onChange = {(e) => { onChange(e.target.value) }}
      value = {value}
    >
      <option value="" disabled>{defaultVal}</option>
      {options.map((opt) => {
        return <option value={opt.val} key={opt.val}>{opt.name}</option>
      })}
    </select>
  );
};

export default MySelect;
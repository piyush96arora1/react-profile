import React, { useState } from 'react';

function TextInput({
  type = 'text',
  label = 'Name',
  value,
  handleChange,
  name,
  id,
}) {
  return (
    <div className="input-container">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
export default TextInput;

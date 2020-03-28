import React from 'react'

export const Input = ({ type, name, labelText, handleInput, autoComplete }) => (
  <div>
    <label htmlFor={name}>{labelText}</label>
    <input
      type={type}
      name={name}
      onChange={handleInput}
      autoComplete={autoComplete}
    />
  </div>
)

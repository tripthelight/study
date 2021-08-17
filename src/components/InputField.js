import React from 'react';

const InputField = ({
  type,
  value,
  placeholder,
  onChange,
  errorMeeage
}) => {
  return (
    // <React.Fragment>
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      /><br />
      <div style={{color: 'red'}}>{errorMeeage}</div>
    </>
    // </React.Fragment>
  )
};

export default InputField;
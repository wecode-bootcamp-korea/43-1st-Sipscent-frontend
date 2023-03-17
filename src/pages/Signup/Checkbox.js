import React, { useState } from 'react';
import './Checkbox.scss';

const Checkbox = ({ id, key, head, errMsg, name, checked, toggleCheck }) => {
  return (
    <div key={key}>
      <input onClick={toggleCheck(id)} type="checkbox" />
      <span>{head}</span>
      {!checked && <p className="varChkBx">{errMsg}</p>}
      <div className="useMandatory">{head}</div>
    </div>
  );
};

export default Checkbox;

import React, { useState } from 'react';
import './Checkbox.scss';

const Checkbox = ({ key, head, errMsg, name, isClickedSignup }) => {
  const [chkBx, setChkBx] = useState(false);

  const chkBxValueChange = e => {
    const { name, value } = e.target;
    setChkBx(prev => ({ ...prev, [name]: value }));
  };

  const isChkBxClick = () => {
    setChkBx(prev => !prev);
  };

  return (
    <div key={key}>
      <input onClick={isChkBxClick} type="checkbox" />

      <span>{head}</span>
      {!chkBx && isClickedSignup && <p className="varChkBx">{errMsg}</p>}
      <div className="useMandatory">{head}</div>
    </div>
  );
};

export default Checkbox;

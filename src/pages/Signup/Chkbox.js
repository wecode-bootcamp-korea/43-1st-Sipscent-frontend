import React, { useState } from 'react';
import './Chkbox.scss';

const Chkbox = ({ key, head, errMsg, name, isClickedSignup }) => {
  const [chkBx, setChkBx] = useState(false);

  const chkBxValueChange = e => {
    const { name, value } = e.target;
    setChkBx({ ...chkBx, [name]: value });
  };

  const isChkBxClick = () => {
    setChkBx(!chkBx);
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

export default Chkbox;

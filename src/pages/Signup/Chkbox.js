import React, { useState } from 'react';
import './Chkbox.scss';

const Chkbox = ({ key, head }) => {
  const [chkBx, setChkBx] = useState(false);
  const isChkBxClick = () => {
    setChkBx(!chkBx);
  };

  return (
    <div key={key}>
      <input onClick={isChkBxClick} type="checkbox" />

      <span>{head}</span>

      <p className={`chkOrNot ${chkBx ? 'block' : 'show'}`}>
        체크 여부를 확인해주세요^^{' '}
      </p>

      <div className="useMandatory">{head}</div>
    </div>
  );
};

export default Chkbox;

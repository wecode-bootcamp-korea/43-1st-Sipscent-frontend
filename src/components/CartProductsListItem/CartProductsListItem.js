import React, { useState } from 'react';
import './CartProductsListItem.scss';

const CartProductsListItem = () => {
  const [number, setNumber] = useState(1);

  const handleItemNum = value => {
    if (number + value === 0) return;

    setNumber(prev => prev + value);
  };

  return (
    <li className="cartProductsListItem">
      <div className="cartProductstName">로즈티</div>
      <div className="cartProductsAmount">15g</div>
      <div className="cartProductsCount">
        <button
          className="minusButton"
          onClick={() => {
            handleItemNum(-1);
          }}
        >
          ➖
        </button>
        <span className="cartProductstNum">{number}</span>
        <button
          className="plusButton"
          onClick={() => {
            handleItemNum(1);
          }}
        >
          ➕
        </button>
        <button className="deleteButton">삭제</button>
      </div>
      <div>{`₩ ${Number(65000) * number}`}</div>
    </li>
  );
};

export default CartProductsListItem;

import React, { useState } from 'react';
import './CartList.scss';

const CartProductListItem = () => {
  const [number, setNumber] = useState(1);

  const subtract = () => {
    setNumber(number - 1);
    if (number < 2) {
      setNumber(1);
    }
  };

  return (
    <li className="cartProductsListItem">
      <div className="cartProductstName">로즈티</div>
      <div className="cartProductsAmount">15g</div>
      <div className="cartProductsCount">
        <button className="minusButton" onClick={subtract}>
          ➖
        </button>
        <span className="cartProductstNum">{number}</span>
        <button
          className="plusButton"
          onClick={() => {
            setNumber(number + 1);
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

export default CartProductListItem;

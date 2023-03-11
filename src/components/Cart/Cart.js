import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const [number, setNumber] = useState(1);
  const navigate = useNavigate();

  const subtract = () => {
    setNumber(number - 1);
    if (number < 2) {
      setNumber(1);
    }
  };
  return (
    <div className="cart">
      <div className="cartProducts">
        <div className="cartProductsHeader">
          <div>상품명</div>
          <div>용량</div>
          <div>수량</div>
          <button className="closeButton">X</button>
        </div>
        <ul className="cartProductsList">
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
        </ul>
      </div>
      <div className="cartSummaryWrap">
        <div className="cartSummary">
          <div className="cartSummaryPriceWrap">
            <span className="cartSummaryPrice">소계 (세금 포함)</span>
            <span className="cartSummaryPriceNum">₩ 139,000</span>
          </div>
          <button
            className="cartSummaryButton"
            onClick={() => {
              navigate('/order');
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

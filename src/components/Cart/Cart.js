import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProductsListItem from '../CartProductsListItem/CartProductsListItem';
import './Cart.scss';

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartProducts">
        <div className="cartProductsHeader">
          <div>상품명</div>
          <div>용량</div>
          <div>수량</div>
          <button
            className="closeButton"
            onClick={() => {
              setIsCartOpen(false);
            }}
          >
            X
          </button>
        </div>
        <ul className="cartProductsList">
          <CartProductsListItem />
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

import React from 'react';
import './CartProductsListItem.scss';

const CartList = ({
  cartData,
  setCartData,
  cartId,
  name,
  amount,
  quantity,
  totalPrice,
  handleItemNum,
  deleteCartList,
}) => {
  return (
    <li className="cartProductsListItem">
      <div className="cartProductstName">{name}</div>
      <div className="cartProductsAmount">{amount} g</div>
      <div className="cartProductsCount">
        <button
          className="minusButton"
          onClick={() => {
            handleItemNum(-1, quantity, cartId);
          }}
        >
          ➖
        </button>
        <span className="cartProductstNum">{quantity}</span>
        <button
          className="plusButton"
          onClick={() => {
            handleItemNum(1, quantity, cartId);
          }}
        >
          ➕
        </button>
        <button
          className="deleteButton"
          onClick={() => {
            deleteCartList(cartId);
          }}
        >
          삭제
        </button>
      </div>
      <div>
        ₩{' '}
        {Number(totalPrice)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </li>
  );
};
export default CartList;

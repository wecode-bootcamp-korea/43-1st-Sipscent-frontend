import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from '../CartProductsListItem/CartProductsListItem';
import './Cart.scss';

const Cart = ({ setIsCartOpen }) => {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  const clickOrder = () => {
    navigate('/order');
    setIsCartOpen(false);
  };

  useEffect(() => {
    fetch('http://10.58.52.228:8002/carts')
      .then(response => response.json())
      .then(data => setCartData(data.carts));
  }, []);

  const handleItemNum = (value, quantity, cartId) => {
    if (quantity + value === 0) return;

    const newArr = [...cartData];

    setCartData(
      newArr.map(list => {
        if (list.cartId === cartId) {
          return { ...list, quantity: quantity + value };
        }
        return list;
      })
    );

    changeQuantity(quantity + value, cartId);
  };

  const changeQuantity = (quantity, cartId) => {
    fetch(`http://10.58.52.228:8002/carts?cart_id=${cartId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'error') {
          alert('다시 시도해주세요');
        }
        setCartData(data.update);
      });
  };

  const deleteCartList = cartId => {
    fetch(`http://10.58.52.228:8002/carts?cart_id=${cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleteItem) {
          alert('삭제 되었습니다.');
          setCartData(data.deleteItem);
        }
      });
  };

  return (
    <div className="cartModal">
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
            {cartData[0]?.cartId &&
              cartData.map(item => {
                return (
                  <CartList
                    key={item.cartId}
                    cartData={cartData}
                    setCartData={setCartData}
                    cartId={item.cartId}
                    name={item.itemName}
                    amount={item.itemSize}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                    handleItemNum={handleItemNum}
                    deleteCartList={deleteCartList}
                  />
                );
              })}
          </ul>
        </div>
        <div className="cartSummaryWrap">
          <div className="cartSummary">
            <div className="cartSummaryPriceWrap">
              <span className="cartSummaryPrice">소계 (세금 포함)</span>
              <span className="cartSummaryPriceNum">
                ₩{' '}
                {Math.trunc(cartData[0]?.cartTotalPrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
            <button className="cartSummaryButton" onClick={clickOrder}>
              결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

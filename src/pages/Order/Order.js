import React, { useEffect, useState } from 'react';
import { ORDER_INPUT_DATA } from './orderInputData';
import './Order.scss';

const Order = () => {
  const [inputValue, setInputValue] = useState({
    userPhoneNumber: '',
    userAddress: '',
  });
  const [orderProductData, setOrderProductData] = useState([]);

  const handleValueChange = e => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  useEffect(() => {
    fetch('/data/orderData.json')
      .then(res => res.json())
      .then(data => {
        setOrderProductData([data]);
      });
  }, []);

  return (
    <div className="order">
      <div className="orderInfoContainer">
        <div className="orderUserInfoBox">
          <h1 className="orderHead">주문자 정보</h1>
          <form className="orderUserInfoInputContainer">
            {ORDER_INPUT_DATA.map(({ title, helpText, name }, key) => (
              <div key={key} className="orderUserInfoInputBox">
                <div>{title}</div>
                <input
                  onChange={handleValueChange}
                  className="orderUserInput"
                  name={name}
                />
                <div>{helpText} 올바르지 않습니다.</div>
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="orderSummary">
        <h1 className="orderHead">제품 결제 요약</h1>

        {orderProductData[0]?.orderList.map((order, key) => (
          <div key={key} className="orderSummaryProductList">
            <div className="orderSummaryProduct">
              <div> {order.itemname}</div>
              <div>{order.quantity} 개</div>
            </div>
            <div className="orderSummaryProductPrice">{order.price}₩</div>
          </div>
        ))}

        {orderProductData.map((order, key) => (
          <div key={key} className="orderSummaryTotal">
            <div className="orderSummaryPoint">
              <div>사용가능한 포인트</div>
              <div>{order.point}포인트</div>
            </div>
            <div className="orderSummaryTotalPrice">
              <div>최종가격</div>
              <div>{order.totalPrice}원</div>
            </div>
          </div>
        ))}
        <div className="orderButtonBox">
          <button
            onClick={e => handleSubmit(e)}
            type="button"
            className="orderButton"
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

/* {PRICE_LIST.map(list => {
            return (
              <div className="price" key={list.id}>
                <span>{list.title}</span>
                {list.title !== '배송' ? (
                  <span>{priceInfo[list.name]}₩</span>
                ) : (
                  <span>{list.price}₩</span>
                )}
              </div>
            );
          })} */

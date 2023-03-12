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
      .then(data => data);
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
          <div className="orderUserInfo">
            <p className="orderUserInfoUserName">유 정 인</p>
            <p className="orderUserInfoUserEmail">wecode43@gracefulRain.co</p>
          </div>
          <form className="orderUserInfoInputContainer">
            {ORDER_INPUT_DATA.map(({ title, helpText, name }, key) => (
              <div key={key} className="orderUserInfoInputBox">
                <div>{title}</div>
                <input
                  onChange={handleValueChange}
                  className="orderUserInput"
                  name={name}
                />
                <div className="orderUserInputHelpText">{helpText}</div>
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="orderSummary">
        <h1 className="orderHead">제품 결제 요약</h1>
        {orderProductData[0]?.orderList.map(
          ({ itemname, quantity, price }, key) => (
            <div key={key} className="orderSummaryProductList">
              <div className="orderSummaryProduct">
                <div>{itemname}</div>
                <div>{quantity} 개</div>
              </div>
              <div className="orderSummaryProductPrice">{price}₩</div>
            </div>
          )
        )}
        {orderProductData.map(({ point, totalPrice }, key) => (
          <div key={key} className="orderSummaryTotal">
            <div className="orderSummaryPoint">
              <div>사용가능한 포인트</div>
              <div>{point}포인트</div>
            </div>
            <div className="orderSummaryTotalPrice">
              <strong>합계</strong>
              <strong>{totalPrice}₩</strong>
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

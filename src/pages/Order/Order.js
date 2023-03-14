import React, { useEffect, useState } from 'react';
import { ORDER_INPUT_DATA } from './orderInputData';
import './Order.scss';

const Order = () => {
  const [inputValue, setInputValue] = useState({
    userPhoneNumber: '',
    userAddress: '',
  });

  const [orderProductData, setOrderProductData] = useState([]);

  const userPhoneNumberCheck = inputValue.userPhoneNumber.length > 3;

  const isShowHintText = _title =>
    inputValue.userPhoneNumber &&
    _title === '전화번호' &&
    !userPhoneNumberCheck;

  function handleValueChange(e) {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

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
          {orderProductData.map(({ username, email }, item_id) => (
            <div key={item_id} className="orderUserInfo">
              <p className="orderUserInfoUserName">{username}</p>
              <p className="orderUserInfoUserEmail">{email}</p>
            </div>
          ))}
          <form className="orderUserInfoInputContainer">
            {ORDER_INPUT_DATA.map(({ title, helpText, name }, item_id) => (
              <div key={item_id} className="orderUserInfoInputBox">
                <div>{title}</div>
                <input
                  onChange={handleValueChange}
                  className="orderUserInput"
                  name={name}
                />

                {isShowHintText(title) && (
                  <div className="orderUserInputHelpText">{helpText}</div>
                )}
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="orderSummary">
        <h1 className="orderHead">제품 결제 요약</h1>
        {orderProductData[0]?.orderList.map(
          ({ itemname, quantity, price }, item_id) => (
            <div key={item_id} className="orderSummaryProductList">
              <div className="orderSummaryProduct">
                <div>{itemname}</div>
                <div>{quantity} 개</div>
              </div>
              <div className="orderSummaryProductPrice">
                {Math.trunc(price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                ₩
              </div>
            </div>
          )
        )}
        {orderProductData.map(({ point, totalPrice }, key) => (
          <div key={key} className="orderSummaryTotal">
            <div className="orderSummaryPoint">
              <div>사용가능한 포인트</div>
              <div>
                {Math.trunc(point)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                포인트
              </div>
            </div>
            <div className="orderSummaryTotalPrice">
              <strong>합계</strong>
              <strong>
                {Math.trunc(totalPrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                ₩
              </strong>
            </div>
          </div>
        ))}
        <div className="orderButtonBox">
          <button onClick={handleSubmit} type="button" className="orderButton">
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

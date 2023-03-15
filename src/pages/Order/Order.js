import React, { useEffect, useState, navigate } from 'react';
import { ORDER_INPUT_DATA } from './orderInputData';
import { BASE_URL } from '../../config';
import './Order.scss';

const Order = () => {
  const [orderProductData, setOrderProductData] = useState({});
  const [inputValue, setInputValue] = useState({
    userPhoneNumber: '',
    userAddress: '',
  });
  const userPhoneNumberCheck = inputValue.userPhoneNumber.length > 3;

  const isShowHintText = _title =>
    inputValue.userPhoneNumber &&
    _title === '전화번호' &&
    !userPhoneNumberCheck;

  function handleValueChange(e) {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => {
        setOrderProductData(data);
      });
  }, []);
  const handleSubmit = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'PAYMENT_SUCCESS') {
          alert('결제가 완료되었습니다.');
          navigate('/');
        } else {
          alert('주문을 확인해 주세요.');
        }
      });
  };

  return (
    <div className="order">
      <div className="orderInfoContainer">
        <div className="orderUserInfoBox">
          <h1 className="orderHead">주문자 정보</h1>
          <div className="orderUserInfo">
            <p className="orderUserInfoUserName">
              {orderProductData.getOrderList &&
                orderProductData.getOrderList[0].username}
            </p>
            <p className="orderUserInfoUserEmail">
              {orderProductData.getOrderList &&
                orderProductData.getOrderList[0].email}
            </p>
          </div>
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
        {orderProductData.getOrderList &&
          orderProductData.getOrderList.map(
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
        <div className="orderSummaryTotal">
          <div className="orderSummaryPoint">
            <div>사용가능한 포인트</div>
            <div>
              {Math.trunc(
                orderProductData.getOrderList &&
                  orderProductData.getOrderList[0].point
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              포인트
            </div>
          </div>
          <div className="orderSummaryTotalPrice">
            <strong>합계</strong>
            <strong>
              {Math.trunc(
                orderProductData.getOrderList &&
                  orderProductData.getOrderList[0].totalPrice
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              ₩
            </strong>
          </div>
        </div>
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

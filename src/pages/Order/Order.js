import React, { useState } from 'react';
import { ORDER_INPUT_DATA } from './orderInputData';
import './Order.scss';
import { ORDER_PRODUCT_DATA } from './orderPriceData';

const Order = () => {
  const price = 27000;
  const priceTax = price * (0.1 + 0.03);
  const point = 100000;
  // const [orderPrice, setOrderPrice] = useState();

  const [inputValue, setInputValue] = useState({
    userPhoneNumber: '',
    userAddress: '',
  });

  const handleValueChange = e => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  /**
   * @param value: 사용자가 입력 한 값
   * @param name: target에 설정해준 name
   *
   * 1번째 onChange 사용자의 입력값  'a'
   * 1. input onChange에서 change이벤트가 발생했네?
   * 2. handleValueChange 호출
   * 3. 구조분해 할당해서  value와 name을 취함
   * 4. setInputValue({...inputValue, [name]: value})
   */

  // console.log(inputValue);

  const handleSubmit = () => {
    fetch('http://10.58.52.201:8001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

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
        <div className="orderPriceOverview">
          <div className="price">
            <span>상품 가격</span>
            <span>{price}₩</span>
          </div>
          <div className="price">
            <span>배송</span>
            <span>0₩</span>
          </div>
          <div className="price">
            <span>(포함된) 세금</span>
            <span>{priceTax}₩</span>
          </div>
        </div>
        <div className="totalPrice">
          <span>합계</span>
          <span>{price}₩</span>
        </div>
        <div className="orderUserPoint">
          <div>현재 사용 가능 포인트 : {point}₩</div>
          <div>결재 후 남은 포인트 : {point - price}₩</div>
        </div>
        <div className="orderProduct">
          <span className="orderProductName">Floral tea</span>
          <span className="orderProductQuantity">2개</span>
        </div>
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

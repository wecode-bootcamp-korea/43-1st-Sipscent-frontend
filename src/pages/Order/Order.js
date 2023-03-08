import React from 'react';
import './Order.scss';

const Order = () => {
  const price = 27000;
  const priceTax = price * 0.13;
  return (
    <div className="order">
      <div className="orderInfoContainer">
        <div className="orderUserInfoBox">
          <h1 className="orderHead">주문자 정보</h1>
          <div className="orderUserInfoInputContainer">
            <div className="orderUserInfoInputBox">
              <div>이름</div>
              <input className="orderCheckUserName" />
              <p>이름이 올바르지 않습니다.</p>

              <div>전화번호</div>
              <input className="orderCheckUserPhoneNumber" />
              <div>이메일</div>
              <input className="orderCheckUserEamil" />
              <div>주소</div>
              <input className="orderCheckUserAddress" />
              <div>상세 주소</div>
              <input className="orderCheckUserAddress" />
            </div>
          </div>
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

        <div className="orderProduct">
          <span className="orderProductName">Floral tea</span>
          <span className="orderProductQuantity">2개</span>
        </div>
        <div className="orderButtonBox">
          <button type="button" className="orderButton">
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

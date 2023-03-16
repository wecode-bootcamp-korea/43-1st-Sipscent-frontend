import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderView.scss';

const OrderView = () => {
  const [orderViewData, setOrderViewData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => {
        setOrderViewData(data);
      });
  }, []);

  const goToMain = () => {
    navigate('/');
  };
  return (
    <div className="orderView">
      <div className="orderViewSuccessBox">
        <h1 className="orderViewSuccessBoxHead">결제 완료</h1>
        <p className="orderViewSuccessNumber">주문 번호 : 145787496857945683</p>
        <p className="orderViewSuccessDate">주문 일시 : 2023년 3월 8일</p>
      </div>
      <div className="orderViewInfoContainer">
        <div className="orderViewUserInfo">
          <h1 className="orderViewUserInfoHead">받는사람 정보</h1>
          <div className="orderViewUserInfoContents">
            <p>이름 : 유정인</p>
            <p>주소 : 서울 강남구 테헤란로 427</p>
            <p>전화번호 : 010-4233-6634</p>
          </div>
        </div>
        <div className="orderViewOrderInfo">
          <h1 className="orderViewOrderInfoHead">결제정보</h1>
          <div className="orderViewOrderInfoContents">
            <div className="orderViewOrderShipInfo">
              <span>배송 상태</span>
              <span>상품 준비중</span>
            </div>
            <div className="orderViewPoint">
              <div>잔여포인트</div>
              <div>880,440 point</div>
            </div>
            <div className="orderViewOrderInfoContentsDetailBox">
              <div className="orderViewOrderInfoContentsDetail">
                <span>총 결제 금액</span>
                <span>3,000 ₩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={goToMain} type="button" className="orderViewButton">
        메인으로 가기
      </button>
    </div>
  );
};

export default OrderView;

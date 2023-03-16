import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

import './OrderView.scss';

const OrderView = () => {
  const [orderViewData, setOrderViewData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/orders/status`)
      .then(res => res.json())
      .then(data => {
        setOrderViewData(data);
      });
  }, []);

  const goToMain = () => {
    navigate('/');
  };

  if (!orderViewData.orderStatus) return null;
  const order = orderViewData?.orderStatus[0];
  const date = orderViewData?.orderStatus[0].created_at;
  const newDate = `${date.substring(0, 4)}년 ${date
    .substring(5, 7)
    .replace(/(^0+)/, '')}월 ${date
    .substring(8, 10)
    .replace(/(^0+)/, '')}일 ${date
    .substring(11, 13)
    .replace(/(^0+)/, '')}시 ${date
    .substring(14, 16)
    .replace(/(^0+)/, '')}분 ${date.substring(17, 19).replace(/(^0+)/, '')}초`;

  return (
    <div className="orderView">
      <div className="orderViewSuccessBox">
        <h1 className="orderViewSuccessBoxHead">결제 완료</h1>
        <p className="orderViewSuccessNumber">
          주문 번호 : {order.order_number}
        </p>
        <p className="orderViewSuccessDate">주문 일시 : {newDate}</p>
      </div>
      <div className="orderViewInfoContainer">
        <div className="orderViewUserInfo">
          <h1 className="orderViewUserInfoHead">받는사람 정보</h1>
          <div className="orderViewUserInfoContents">
            <p>이름 : {order.name}</p>
            <p>주소 : {order.user_address}</p>
            <p>전화번호 : {order.user_phone_number}</p>
          </div>
        </div>
        <div className="orderViewOrderInfo">
          <h1 className="orderViewOrderInfoHead">결제정보</h1>
          <div className="orderViewOrderInfoContents">
            <div className="orderViewOrderShipInfo">
              <span>배송 상태</span>
              <span>{order.order_status}</span>
            </div>
            <div className="orderViewPoint">
              <div>잔여포인트</div>
              <div>{order.point} point</div>
            </div>
            <div className="orderViewOrderInfoContentsDetailBox">
              <div className="orderViewOrderInfoContentsDetail">
                <span>총 결제 금액</span>
                <span>₩{order.total_price}</span>
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

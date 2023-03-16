import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';

import './OrderView.scss';

const OrderView = () => {
  const [orderViewData, setOrderViewData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(APIS.ordersView, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderViewData(data);
        // console.log(data);
      });
  }, []);

  const goToMain = () => {
    navigate('/');
  };

  if (!orderViewData.orderStatus) return null;
  const OS = orderViewData.orderStatus;
  // const date = OS[OS.length - 1].created_at;
  // const now = new Date();
  // const orderNumber = `${String(now.getFullYear())}년 ${String(
  //   now.getMonth() + 1
  // ).replace(/(^0+)/, '')}월 ${String(now.getDate()).replace(
  //   /(^0+)/,
  //   ''
  // )}일 ${String(now.getHours()).padStart(2, '0')}시 ${String(
  //   now.getMinutes()
  // ).replace(/(^0+)/, '')}분 ${String(now.getSeconds()).replace(/(^0+)/, '')}초`;
  // console.log(orderNumber);

  //
  // const date = '2023-03-15T05:41:48.000Z';
  const date = OS[OS.length - 1].order_number;

  const newDate = `${date.substring(0, 4)}년 ${date
    .substring(4, 6)
    .replace(/(^0+)/, '')}월 ${date
    .substring(6, 8)
    .replace(/(^0+)/, '')}일 ${date.substring(8, 10)}시 ${date
    .substring(10, 12)
    .replace(/(^0+)/, '')}분 ${date.substring(12, 14).replace(/(^0+)/, '')}초`;

  //

  // console.log(OS[OS.length - 1]);
  console.log(OS[OS.length - 1]);
  return (
    <div className="orderView">
      <div className="orderViewSuccessBox">
        <h1 className="orderViewSuccessBoxHead">결제 완료</h1>
        <p className="orderViewSuccessNumber">
          주문 번호 : {OS[OS.length - 1].order_number}
        </p>
        <p className="orderViewSuccessDate">주문 일시 :{newDate}</p>
      </div>
      <div className="orderViewInfoContainer">
        <div className="orderViewUserInfo">
          <h1 className="orderViewUserInfoHead">받는사람 정보</h1>
          <div className="orderViewUserInfoContents">
            <p>이름 : {OS[OS.length - 1].name}</p>
            <p>주소 : {OS[OS.length - 1].user_address}</p>
            <p>전화번호 : {OS[OS.length - 1].user_phone_number}</p>
          </div>
        </div>
        <div className="orderViewOrderInfo">
          <h1 className="orderViewOrderInfoHead">결제정보</h1>
          <div className="orderViewOrderInfoContents">
            <div className="orderViewOrderShipInfo">
              <span>배송 상태</span>
              <span>{OS[OS.length - 1].order_status}</span>
            </div>
            <div className="orderViewPoint">
              <div>잔여포인트</div>
              <div>{OS[OS.length - 1].point} point</div>
            </div>
            <div className="orderViewOrderInfoContentsDetailBox">
              <div className="orderViewOrderInfoContentsDetail">
                <span>총 결제 금액</span>
                <span>₩{OS[OS.length - 1].total_price}</span>
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

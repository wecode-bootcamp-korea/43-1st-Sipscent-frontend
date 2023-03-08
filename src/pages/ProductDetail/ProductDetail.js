import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetailContainer">
        <div className="productImgWrap">
          <div
            className="productImg"
            style={{
              backgroundImage: `url('/images/ProductDetail/dan-farrell-CpTbMyO2CcM-unsplash.jpg')`,
            }}
          />
        </div>
        <div className="productDetailInfo">
          <div className="productDetailHeader">
            <div className="productSort">Floral</div>
            <h2 className="productName">Item Name</h2>
            <p className="productExplain">
              비 내린 뒤의 풍경처럼 차분하고 안개처럼 은은함을 선물하는 차
            </p>
          </div>
          <div className="productDetailContent">
            <h4 className="productDetailContentTitle">Tasting Notes</h4>
            <p className="productDetailContentText">은은한, 차분한</p>
          </div>
          <div className="productDetailContent">
            <h4 className="productDetailContentTitle">향</h4>
            <p className="productDetailContentText">플로럴</p>
          </div>
          <div className="productDetailContent">
            <h4 className="productDetailContentTitle">용량</h4>
            <p className="productDetailContentText">18g</p>
          </div>
          <div className="addCart">
            <button className="addCartButton">
              카트에 추가하기 - ₩ 35,000
            </button>
          </div>
        </div>
      </div>
      <div className="productDetailFooterWrap">
        <div className="productDetailFooter">
          <h5 className="productDetailFooterTitle">포장 서비스</h5>
          <p className="productDetailFooterText">
            주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.
          </p>
        </div>
        <div className="productDetailFooter">
          <h5 className="productDetailFooterTitle">샘플 증정</h5>
          <p className="productDetailFooterText">
            모든 주문건에 무료 샘플을 드립니다. (샘플 종류는 임의 지정이
            불가합니다.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

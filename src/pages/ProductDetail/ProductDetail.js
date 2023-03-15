import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIS } from '../../config';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productDetailData, setProductDetailData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch('/data/teaListData.json')
      .then(response => response.json())
      .then(data => setProductDetailData(data));
  }, [params.id]);

  useEffect(() => {
    fetch(`${APIS.items}/${params.id}`)
      .then(response => response.json())
      .then(data => setProductDetailData(data));
  }, [params.id]);

  const addToCart = () => {
    fetch(APIS.carts, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        itemId: params.id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS_CREATECART') {
          alert('장바구니에 담겼습니다');
        }
      });
  };

  if (Object.keys(productDetailData).length === 0) return null;

  return (
    <div className="productDetail">
      <div className="productDetailContainer">
        <div className="productImgWrap">
          <div className="productImg">
            <img
              className="productImgUrl"
              src={productDetailData.items[0].image_url}
              alt="teabag"
            />
          </div>
        </div>
        <div className="productDetailInfo">
          <div className="productDetailHeader">
            <div className="productSort">
              {productDetailData.items[0].category_name}
            </div>
            <h2 className="productName">{productDetailData.items[0].name}</h2>
            <p className="productExplain">
              {productDetailData.items[0].description}
            </p>
          </div>
          <div className="productDetailContent">
            <h4 className="productDetailContentTitle">Tasting Notes</h4>
            <p className="productDetailContentText">
              {productDetailData.items[0].tasting_notes}
            </p>
          </div>
          <div className="productDetailContent">
            <h4 className="productDetailContentTitle">향</h4>
            <p className="productDetailContentText">
              {productDetailData.items[0].name}
            </p>
          </div>
          <div className="productDetailContent">
            <h4 className="productDetailContentTitle">용량</h4>
            <p className="productDetailContentText">
              {productDetailData.items[0].teabag_size}g
            </p>
          </div>
          <div className="addCart">
            <button className="addCartButton" onClick={addToCart}>
              카트에 추가하기 - ₩{' '}
              {productDetailData.items[0].price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APIS } from '../../config';
import './ProductWrap.scss';

const ProductWrap = ({
  id,
  typeName,
  img,
  name,
  tastingNotes,
  size,
  description,
  price,
}) => {
  const [isHover, setIsHover] = useState(false);

  const addCart = () => {
    fetch(APIS.carts, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        itemId: id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS_CREATECART') {
          alert('장바구니에 담겼습니다');
        }
        if (data.message === 'CART_OVERLOAD') {
          alert('장바구니에 상품을 더이상 담을 수 없습니다.');
        }
      });
  };

  return (
    <div
      className="productWrap"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Link className="productInfo" to={`/productdetail/${id}`}>
        <div className="teaBagImgWrap">
          <img className="teaBagImg" src={img} alt="tea bag" />
        </div>
        <h3 className="teaName">{name}</h3>
        {typeName === '티백' ? (
          <>
            <p className="teaScent">
              <span className="teaScentTitle">향</span>
              <span>
                {tastingNotes[0]}, {tastingNotes[1]}
              </span>
            </p>
            <p className="teaAmount">
              <span className="teaAmountTitle">용량</span>
              <span>{size}g</span>
            </p>
          </>
        ) : (
          <p className="teaScent">
            <span className="teaScentTitle">설명</span>
            <span>{description}</span>
          </p>
        )}
      </Link>
      <button
        onClick={addCart}
        className={isHover ? 'addCartButton' : 'hiddenButton'}
      >{`카트에 추가 - ₩ ${Math.trunc(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</button>
    </div>
  );
};

export default ProductWrap;

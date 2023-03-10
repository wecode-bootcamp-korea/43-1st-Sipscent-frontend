import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductWrap.scss';

const ProductWrap = ({
  key,
  typeName,
  img,
  name,
  tastingNotes,
  size,
  description,
  price,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={key}
      className="productWrap"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Link className="productInfo" to="/productdetail">
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
        className={isHover ? 'addCartButton' : 'hiddenButton'}
      >{`카트에 추가 - ₩ ${Math.trunc(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</button>
    </div>
  );
};

export default ProductWrap;

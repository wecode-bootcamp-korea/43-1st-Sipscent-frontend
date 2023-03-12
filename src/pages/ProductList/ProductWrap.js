import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductWrap.scss';

const ProductWrap = ({
  key,
  itemType,
  img,
  name,
  scent,
  amount,
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
        {itemType === '티백' ? (
          <>
            <p className="teaScent">
              <span className="teaScentTitle">향</span>
              <span>{scent}</span>
            </p>
            <p className="teaAmount">
              <span className="teaAmountTitle">용량</span>
              <span>{amount}g</span>
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
      >{`카트에 추가 - ₩ ${price}`}</button>
    </div>
  );
};

export default ProductWrap;

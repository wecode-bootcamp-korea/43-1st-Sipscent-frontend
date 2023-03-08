import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductWrap = ({ key, img, name, scent, amount, price }) => {
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
          <div
            className="teaBagImg"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
        <h3 className="teaName">{name}</h3>
        <p className="teaScent">
          <span className="teaScentTitle">향</span>
          <span>{scent}</span>
        </p>
        <p className="teaAmount">
          <span className="teaAmountTitle">용량</span>
          <span>{amount}</span>
        </p>
      </Link>
      {isHover ? (
        <button className="addCartButton">{`카트에 추가 - ${price}`}</button>
      ) : (
        <button
          className="addCartButton"
          style={{ visibility: 'hidden' }}
        >{`카트에 추가 - ${price}`}</button>
      )}
    </div>
  );
};

export default ProductWrap;

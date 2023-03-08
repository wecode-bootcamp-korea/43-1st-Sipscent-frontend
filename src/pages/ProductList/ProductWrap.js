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
        <img className="teaBagImg" src={img} alt="teabag" />
        <h3 className="teaName">{name}</h3>
        <p className="teaScent">{scent}</p>
        <p className="teaAmount">{amount}</p>
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

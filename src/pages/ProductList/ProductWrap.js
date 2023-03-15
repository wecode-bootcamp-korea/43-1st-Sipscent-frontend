import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  paramsCategory,
  paramsSubCategory,
}) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="productWrap"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onClick={() => {
        navigate(`/productdetail/${id}`);
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
        className={isHover ? 'addCartButton' : 'hiddenButton'}
      >{`카트에 추가 - ₩ ${Math.trunc(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</button>
    </div>
  );
};

export default ProductWrap;

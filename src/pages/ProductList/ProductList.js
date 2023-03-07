import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productList">
      <h1 className="titleFloral">Floral</h1>
      <div className="buttonWrap">
        <button className="button">티백</button>
        <button className="button">찻잔</button>
      </div>
      <div className="productListWrap">
        <div className="productComment">
          <h2>감각을 자극하면서 향기로운 고요함을 불어넣는 홈 케어 제품</h2>
          <p>
            ‘집은 우리의 정서적 심장부’라고 세계적으로 유명한 디자이너 일세
            크로포드(Ilse Crawford)는 말했습니다. 이 명언에 어울리게 이솝은
            실용성과 즐거움 모두를 만족시키는 다양한 아로마 제품들을 제공합니다.
          </p>
        </div>
        <div className="productWrap">
          <a href="#none">
            <img src="" alt="teabag" />
            <h3>티백</h3>
            <p>용량</p>
          </a>
          <button className="button">카트에 추가 - 가격</button>
        </div>
        <div className="productWrap">
          <a href="#none">
            <img src="" alt="teabag" />
            <h3>티백</h3>
            <p>용량</p>
          </a>
          <button>카트에 추가 - 가격</button>
        </div>
        <div className="productWrap">
          <a href="#none">
            <img src="" alt="teabag" />
            <h3>티백</h3>
            <p>용량</p>
          </a>
          <button>카트에 추가 - 가격</button>
        </div>
        <div className="productWrap">
          <a href="#none">
            <img src="" alt="teabag" />
            <h3>티백</h3>
            <p>용량</p>
          </a>
          <button>카트에 추가 - 가격</button>
        </div>
        <div className="productWrap">
          <a href="#none">
            <img src="" alt="teabag" />
            <h3>티백</h3>
            <p>용량</p>
          </a>
          <button>카트에 추가 - 가격</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

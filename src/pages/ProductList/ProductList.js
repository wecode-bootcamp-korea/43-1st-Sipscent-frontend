import React, { useEffect, useState } from 'react';
import ProductWrap from './ProductWrap';
import Filter from '../../components/Filter/Filter';
import './ProductList.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    fetch('/data/teaListData.json')
      .then(response => response.json())
      .then(data => setProductData([data]));
  }, []);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(
      `IP주소/items/${params.category}/${params.subcategory}${location.search}`
    )
      .then(res => res.json())
      .then(data => setProductData([data]));
  }, [location.search, location.pathname]);

  return (
    <div className="productList">
      <h1 className="titleFloral">
        {productData && productData[0]?.items[0][0].category_name}
      </h1>
      <div className="selectBoxWrap">
        <select className="selectBox">
          <option value="">정렬</option>
          <option>가나다순</option>
          <option>높은 가격순</option>
          <option>낮은 가격순</option>
        </select>
        <button
          className="filterButton"
          onClick={() => {
            setIsFilterOpen(!isFilterOpen);
          }}
        >
          필터
        </button>
      </div>
      <div className="buttonWrap">
        <button
          className="button"
          onClick={() => {
            navigate(`/productlist/${params.category}/teabags`);
          }}
        >
          티백
        </button>
        <button
          className="button"
          onClick={() => {
            navigate(`/productlist/${params.category}/teacups`);
          }}
        >
          찻잔
        </button>
      </div>
      {isFilterOpen && <Filter />}
      <div className="productListWrap">
        <div className="productComment">
          <h2 className="productExplainTitle">
            {productData && productData[0]?.items[1][0].category_title}
          </h2>
          <p className="productExplain">
            {productData && productData[0]?.items[1][0].category_description}
          </p>
        </div>
        {productData &&
          productData[0]?.items[0].map(product => {
            return (
              <ProductWrap
                key={product.id}
                id={product.id}
                categoryName={product.category_name}
                typeName={product.type_name}
                img={product.image_url}
                name={product.name}
                tastingNotes={product.tasting_notes}
                size={product.teabag_size}
                description={product.description}
                price={product.price}
                paramsCategory={params.category}
                paramsSubCategory={params.subcategory}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;

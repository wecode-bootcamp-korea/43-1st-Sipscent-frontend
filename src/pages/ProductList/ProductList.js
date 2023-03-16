import React, { useEffect, useState } from 'react';
import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import ProductWrap from './ProductWrap';
import Filter from '../../components/Filter/Filter';
import { APIS } from '../../config';
import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   fetch('/data/teaListData.json')
  //     .then(response => response.json())
  //     .then(data => setProductData(data));
  // }, []);

  useEffect(() => {
    fetch(
      `${APIS.items}/${params.category}/${params.subcategory}${location.search}`
    )
      .then(res => res.json())
      .then(data => setProductData(data));
  }, [location.search, location.pathname]);

  if (Object.keys(productData).length === 0) return null;

  const setSort = e => {
    const { value } = e.target;

    if (LIST_SORT.find(({ title }) => title === value)) {
      searchParams.set(
        'sorting',
        LIST_SORT.find(({ title }) => title === value).sort
      );

      setSearchParams(searchParams);
    }
  };

  const productDataPara = productData.items[1][0];

  return (
    <div className="productList">
      <h1 className="titleFloral">{params.category.toUpperCase()}</h1>
      <div className="selectBoxWrap">
        <select className="selectBox" onChange={setSort}>
          <option value="">정렬</option>
          {LIST_SORT.map(sort => {
            return <option key={sort.id}>{sort.title}</option>;
          })}
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
            {productDataPara.category_title}
          </h2>
          <p className="productExplain">
            {productDataPara.category_description}
          </p>
        </div>
        {productData.items[0].map(product => {
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
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;

const LIST_SORT = [
  {
    id: 1,
    title: '높은 가격순',
    sort: 'price',
  },
  {
    id: 2,
    title: '낮은 가격순',
    sort: '-price',
  },
  {
    id: 3,

    title: '가나다순',
    sort: 'name',
  },
];

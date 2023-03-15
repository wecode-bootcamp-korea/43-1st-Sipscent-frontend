import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Nav.scss';

const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {isCartOpen && (
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      <nav className="nav">
        <ul className="categoryWrap">
          <li className="mainLogo">
            <Link to="/">
              <img
                className="mainLogoImg"
                src="/images/Nav/로고 이미지.png"
                alt="sipscent logo"
              />
            </Link>
          </li>
          {NAV_CATEGORY.map(category => {
            return (
              <li className="categoryList" key={category.id}>
                <Link to={category.link}>{category.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="userInfo">
          <li className="loginBtn">
            <button>로그인</button>
          </li>
          <li className="signup">
            <Link to="/signup">회원가입</Link>
          </li>
          <li className="cartButton">
            <button
              onClick={() => {
                setIsCartOpen(true);
              }}
            >
              장바구니
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

const NAV_CATEGORY = [
  {
    id: 1,
    link: '/productlist/floral/teabags',
    title: 'Floral',
  },
  {
    id: 2,
    link: '/productlist/herbal/teabags',
    title: 'Herbal',
  },
  {
    id: 3,
    link: '/productlist/citrus/teabags',
    title: 'Citrus',
  },
  {
    id: 4,
    link: '/productlist/floral/teabags',
    title: 'Fruity',
  },
  {
    id: 5,
    link: '/productlist/herbal/teabags',
    title: 'Green',
  },
  {
    id: 6,
    link: '/productlist/citrus/teabags',
    title: 'Spicy',
  },
];

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
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
        <li className="login">
          <button>로그인</button>
        </li>
        <li className="signup">
          <Link to="/signup">회원가입</Link>
        </li>
        <li className="cart">
          <button>장바구니</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

const NAV_CATEGORY = [
  {
    id: 1,
    link: '/productlist',
    title: 'Floral',
  },
  {
    id: 2,
    link: '',
    title: 'Herb',
  },
  {
    id: 3,
    link: '',
    title: 'Citrus',
  },
  {
    id: 4,
    link: '',
    title: 'Fruity',
  },
  {
    id: 5,
    link: '',
    title: 'Green',
  },
  {
    id: 6,
    link: '',
    title: 'Spicy',
  },
];

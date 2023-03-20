import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Signup from '../../pages/Signup/Signup';
import Login from '../Login/Login';
import { APIS } from '../../config';
import './Nav.scss';

const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
    localStorage.removeItem('TOKEN');
    alert('로그아웃 되었습니다.');
  };

  const showLoginModal = () => {
    setLoginModalOpen(true);
  };

  const showSignupModal = () => {
    setSignupModalOpen(true);
  };

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
          <li className="loginBtnBox">
            {Object.keys(localStorage).includes('TOKEN') ? (
              <button className="loginButton" onClick={handleToggle}>
                로그아웃
              </button>
            ) : (
              <button className="loginButton" onClick={showLoginModal}>
                로그인
              </button>
            )}

            {loginModalOpen && (
              <Login
                loginModalOpen={loginModalOpen}
                setLoginModalOpen={setLoginModalOpen}
              />
            )}
          </li>
          <li className="signupBtnBox">
            <button className="signupButton" onClick={showSignupModal}>
              회원가입
            </button>
            {signupModalOpen && (
              <Signup setSignupModalOpen={setSignupModalOpen} />
            )}
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

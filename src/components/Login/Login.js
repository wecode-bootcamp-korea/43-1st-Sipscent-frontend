import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const [showPw, setShowPw] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  function getUserInfo(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const emailChk =
    (userInfo.email.includes('@') && userInfo.email.includes('.')) ||
    !userInfo.email;

  const pwChk = userInfo.password.length > 5 || !userInfo.password;

  const isUserVaidate =
    userInfo.email.includes('@') &&
    userInfo.email.includes('.') &&
    userInfo.password.length >= 6;
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  function validateUser(e) {
    e.preventDefault();

    fetch('http://10.58.52.234:8002/users/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify(userInfo),
    })
      .then(response => response.json())

      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('TOKEN', data.accessToken);
          alert('로그인에 성공했습니다');
          navigate('/');
        } else {
          alert('아이디와 비밀번호를 확인해 주세요');
        }
      });
  }

  return (
    <div className="login">
      <div className="loginScreen">
        <div className="loginWrapper">
          <h1 className="loginContainer">로그인</h1>

          <div className="emailWrapper">
            <input
              name="email"
              className="loginEmail"
              onChange={getUserInfo}
              placeholder="이메일주소"
              type="text"
            />

            {!emailChk && (
              <p className="message">이메일 형식에 맞지 않습니다.</p>
            )}
          </div>
          <div className="pwWrapper">
            <div className="containerPw">
              <input
                name="password"
                className="loginPw"
                onChange={getUserInfo}
                type={showPw ? 'text' : 'password'}
                placeholder="비밀번호"
              />
              {!pwChk && (
                <p className="message"> 6자리 이상 입력이 필요합니다.</p>
              )}

              <button
                type="button"
                onClick={() => {
                  setShowPw(prev => !prev);
                }}
                className="see"
              >
                보기
              </button>
            </div>
          </div>
          <div className="pwResetWrapper">
            <button className="pwReset">비밀번호 재설정하기</button>
          </div>

          <div className="loginBtnWrapper">
            <button
              onClick={validateUser}
              type="button"
              disabled={!isUserVaidate}
              className="loginBtn"
            >
              로그인
            </button>
          </div>
        </div>
        <button className="loginCloseBtn" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Login;

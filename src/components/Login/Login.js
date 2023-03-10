import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  //입력한 pw 볼 수 있는 state
  const [showPw, setShowPw] = useState(false);
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });

  function getUserInfo(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }
  //이메일 밑에 p 태그
  const emailChk =
    (userInfo.userId.includes('@') && userInfo.userId.includes('.')) ||
    !userInfo.userId;
  console.log(emailChk);
  //비밀번호 밑에 p 태그
  const pwChk = userInfo.userPw.length > 5 || !userInfo.userPw;

  //링크 넘어가게
  const isUserVaidate =
    userInfo.userId.includes('@') &&
    userInfo.userId.includes('.') &&
    userInfo.userPw.includes.length >= 6;
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  function validateUser(e) {
    e.preventDefault();

    fetch('API주소', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify(userInfo),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('네트워크가 불안정합니다. 다시 시도 해 주세요');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'login success') {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인에 성공했습니다');
          navigate({ goToMain });
        } else {
          alert('아이디와 비밀번호를 확인 해 주세요');
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
              name="userId"
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
                name="userPw"
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
                  setShowPw(!showPw);
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
              onSubmit={validateUser}
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

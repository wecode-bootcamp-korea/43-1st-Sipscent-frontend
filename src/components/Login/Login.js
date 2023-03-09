import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
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

  return (
    <div className="loginScreen">
      <div className="loginWrapper">
        <form>
          <div className="login">
            <h1>로그인</h1>
          </div>

          <div className="emailWrapper">
            {' '}
            <input
              name="userId"
              className="loginEmail"
              onChange={getUserInfo}
              placeholder="이메일주소"
              type="text"
            />
            {!emailChk && (
              <p className="message">이메일 형식에 맞지 않아요~~</p>
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
              {!pwChk && <p className="message">6자리 이상 입력해야합니다^^</p>}

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
              type="button"
              disabled={!isUserVaidate}
              className="loginBtn"
            >
              로그인
            </button>
          </div>
        </form>
        <div className="rUOurMemeber">
          <p className="uMemeber">회원이 아니신가요?</p>
        </div>
      </div>
      <div className="uOurMem">
        <button className="singUp">회원가입</button>
      </div>
    </div>
  );
};

export default Login;

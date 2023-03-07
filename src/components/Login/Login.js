import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="loginScreen">
      <div className="loginWrapper">
        <div className="login">
          <h1>로그인</h1>
        </div>
        {/* <div className="container"> */}
        <div className="emailWrapper">
          {' '}
          <input className="loginEmail" id="login" placeholder="이메일주소" />
        </div>
        <div className="pwWrapper">
          <div className="containerPw">
            <input className="loginPw" placeholder="비밀번호" />
            {/* <label for="loginEmail">비밀번호</label> */}

            <button className="see">보기</button>
          </div>
        </div>
        <div className="pwResetWrapper">
          <button className="pwReset">비밀번호 재설정하기</button>
        </div>
        {/* </div> */}
        <div className="loginBtnWrapper">
          <button className="loginBtn">로그인</button>
        </div>
        <h2 className="isU">회원이 아니신가요?</h2>
        <div className="signIn">
          <button className="signInBtn">회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

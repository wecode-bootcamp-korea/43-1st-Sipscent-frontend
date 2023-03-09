import React, { useState } from 'react';
import Chkbox from './Chkbox';
import './Signup.scss';

const Signup = () => {
  //pw 변경 state
  const [showPw, setShowPw] = useState(false);

  //초기값 상태 저장
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  //오류메시지 상태 저장

  const [pwMessage, setPwMessage] = useState('');
  //유효성 검사

  const emailRegExp =
    (email.includes('@', 5) && email.includes('.', 9)) || !email;
  const onChangeEmail = e => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
  };

  //비밀번호

  const onChangePw = e => {
    const currentPw = e.target.value;
    setPw(currentPw);
    if (pw.length > 5) {
      setPwMessage(null);
    } else {
      setPwMessage('6자리 이상 필요합니다.');
    }
  };

  return (
    <div className="signInWrapper">
      <div className="container">
        <h1 className="header">회원가입</h1>
        <p className="headerInfo">
          회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
          있습니다.
        </p>
        <form>
          <div className="name">
            <input className="nameInput" type="text" placeholder="이름" />
          </div>
          <div className="emailWrapper">
            <input
              className="emailInput"
              id="email"
              name="name"
              value={email}
              onChange={onChangeEmail}
              placeholder="이메일 주소"
            />
            {!emailRegExp && (
              <p className="idMessage">이메일 형식에 맞지 않습니다.</p>
            )}
          </div>
          <div className="pwWrapper">
            <input
              className="pwInput"
              type={showPw ? 'text' : 'password'}
              onChange={onChangePw}
              placeholder="비밀번호"
            />
            <p className="pwMessage"> {pwMessage} </p>
            <button
              onClick={() => {
                setShowPw(!showPw);
              }}
              type="button"
              className="signInPwView"
            >
              보기
            </button>
          </div>
        </form>
        <div className="signUpChkBx">
          <div>
            {TERMS_OF_USE.map(info => (
              <Chkbox
                key={info.id}
                // isChkBxClick={isChkBxClick}
                // chkBx={chkBx}
                // info={info}
                head={info.head}
                // id={info.id}
              />
            ))}
          </div>
        </div>

        <div className="finalSignInBtn">
          <button className="finalSignIn">회원가입</button>
        </div>
        <button className="lastBtnLink" type="button">
          <div className="lastLink">이미 이솝 계정을 가지고 계십니까?</div>
        </button>
      </div>
    </div>
  );
};

export default Signup;

const TERMS_OF_USE = [
  { id: 1, head: '본인은 만 14세 이상입니다(필수)' },
  { id: 2, head: '이용 약관에 동의합니다(필수)' },
  {
    id: 3,
    head: '개인정보 수집 및 이용조건에 동의합니다(필수)',
  },
];

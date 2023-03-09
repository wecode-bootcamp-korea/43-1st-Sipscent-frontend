import React, { useEffect, useRef, useState } from 'react';
import Chkbox from './Chkbox';
import { SIGN_UP_INPUT_DATA } from './SIGN_UP_INPUT_DATA';
import './Signup.scss';

const Signup = ({ setModalOpen }) => {
  const handleSubmit = () => {
    fetch('http://10.58.52.175:8002/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const closeModal = () => {
    setModalOpen(true);
  };
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleValueChange = e => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  //pw 변경 state
  const [showPw, setShowPw] = useState(false);

  //초기값 상태 저장
  // const [email, setEmail] = useState('');
  // const [pw, setPw] = useState('');
  //오류메시지 상태 저장

  const [pwMessage, setPwMessage] = useState('');
  //유효성 검사

  const conditions = {
    email:
      (inputValue.email.includes('@', 5) &&
        inputValue.email.includes('.', 9)) ||
      inputValue.email.length === 0,
    password:
      inputValue.password.length > 5 || inputValue.password.length === 0,
  };

  console.log(conditions);

  const emailRegExp =
    (inputValue.email.includes('@', 5) && inputValue.email.includes('.', 9)) ||
    !inputValue.email;

  const onChangeEmail = e => {
    const currentEmail = e.target.value;
    setInputValue.user(currentEmail);
  };

  //비밀번호

  const onChangePw = e => {
    const currentPw = e.target.value;
    setInputValue.password(currentPw);
    if (inputValue.password.length > 5) {
      setPwMessage(null);
    } else {
      setPwMessage('6자리 이상 필요합니다.');
    }
  };
  console.log(inputValue);
  return (
    <div className="modalBg">
      <div className="signInWrapper">
        <div className="container">
          <h1 className="header">회원가입</h1>
          <p className="headerInfo">
            회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
            있습니다.
          </p>
          {/* <form> */}
          {SIGN_UP_INPUT_DATA.map(({ id, title, name, errorMsg }) => {
            return (
              <div className="name" key={id}>
                <input
                  className="nameInput"
                  name={name}
                  type={title === '비밀번호' && !showPw ? 'password' : 'text'}
                  placeholder={title}
                  onChange={handleValueChange}
                />
                {title !== '이름' && !conditions[name] && (
                  <p className="error">{errorMsg}</p>
                )}
                {title === '비밀번호' && (
                  <button
                    onClick={() => {
                      setShowPw(!showPw);
                    }}
                    type="button"
                    className="signInPwView"
                  >
                    보기
                  </button>
                )}
              </div>
            );
          })}
          {/* <div className="name">
              <input
                className="nameInput"
                name="userName"
                type="text"
                placeholder="이름"
              />
            </div>
            <div className="emailWrapper">
              <input
                className="emailInput"
                id="email"
                name="email"
                onChange={onChangeEmail}
                placeholder="이메일 주소"
              />
              {!emailRegExp && (
                <p className="idMessage">이메일 형식에 맞지 않습니다.</p>
              )}
            </div>
            <div className="pwWrapper">
              <input
                name="password"
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
            </div> */}

          <div className="signUpChkBx">
            {/* <div>
                {TERMS_OF_USE.map((info, key) => (
                  <Chkbox
                    key={key}
                    // isChkBxClick={isChkBxClick}
                    // chkBx={chkBx}
                    // info={info}
                    head={info.head}
                    // id={info.id}
                  />
                ))}
              </div> */}
          </div>

          <div className="finalSignInBtn">
            <button onClick={handleSubmit} className="finalSignIn">
              회원가입
            </button>
          </div>
          {/* </form> */}
          <button className="lastBtnLink" type="button">
            <div className="lastLink">이미 이솝 계정을 가지고 계십니까?</div>
          </button>
          <div className="btnX" onClick={closeModal}>
            x
          </div>
        </div>
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

// const modalRef = useRef(null);
// useEffect(e => {
//   const handler = () => {
//     if (!modalRef.current) return;

//     setModalOpen(false);
//   };
//   document.addEventListener('mousedown', handler);
//   return () => {
//     document.removeEventListener('mousedown', handler);
//   };
// });

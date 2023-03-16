import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGN_UP_INPUT_DATA } from './SIGN_UP_INPUT_DATA';
import Checkbox from './Checkbox';
import './Signup.scss';

const Signup = ({ setModalOpen }) => {
  const navigate = useNavigate();
  const [isClickedSignup, setIsClickedSignup] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    isCheckEmailFirst: false,
  });

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleValueChange = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const conditions = {
    email:
      (inputValue.email.includes('@', 5) &&
        inputValue.email.includes('.', 9)) ||
      inputValue.email.length === 0,
    password:
      inputValue.password.length > 5 || inputValue.password.length === 0,
  };

  const userableEmail = () => {
    fetch('http://10.58.52.228:8002/users/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ email: inputValue.email }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === '가입 가능한 이메일입니다.') {
          setIsValidEmail(true);
        } else {
          alert('사용할 수 없는 이메일 입니다');
        }
      });
  };

  const handleSubmit = () => {
    setIsClickedSignup(true);
    fetch('http://10.58.52.228:8002/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === '이미 가입된 이메일입니다.') {
          alert('이미 있는 회원입니다.');
        } else if (data.message === 'SUCCESS_SIGNUP') {
          alert('회원가입에 성공했습니다');
          navigate('/');
        }
      });
  };

  return (
    <div className="signup">
      <div className="signInWrapper">
        <div className="container">
          <h1 className="header">회원가입</h1>
          <p className="headerInfo">
            회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
            있습니다.
          </p>

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
                {title === '이메일 주소' && (
                  <button
                    onClick={userableEmail}
                    type="button"
                    className="signInPwView"
                  >
                    중복확인
                  </button>
                )}
                {title !== '이름' && !conditions[name] && (
                  <p className="error">{errorMsg}</p>
                )}
                {title === '이메일 주소' && isValidEmail && (
                  <p className="error">사용 가능한 이메일입니다</p>
                )}

                {title === '비밀번호' && (
                  <button
                    onClick={() => {
                      setShowPw(prev => !prev);
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

          <div className="signUpChkBx">
            <div>
              {TERMS_OF_USE.map(info => (
                <Checkbox
                  errMsg={info.errMsg}
                  key={info.id}
                  head={info.head}
                  isClickedSignup={isClickedSignup}
                />
              ))}
            </div>
          </div>

          <div className="finalSignInBtn">
            <button onClick={handleSubmit} className="finalSignIn">
              회원가입
            </button>
          </div>

          <button className="lastBtnLink" type="button">
            <div className="lastLink">이미 이솝 계정을 가지고 계십니까?</div>
          </button>

          <div className="btnX" onClick={closeModal}>
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

const TERMS_OF_USE = [
  {
    id: 1,
    head: '본인은 만 14세 이상입니다(필수)',
    errMsg: '체크 여부를 확인해 주세요.',
    name: 'first',
  },
  {
    id: 2,
    head: '이용 약관에 동의합니다(필수)',
    errMsg: '체크 여부를 확인해 주세요.',
    name: 'second',
  },
  {
    id: 3,
    head: '개인정보 수집 및 이용조건에 동의합니다(필수)',
    errMsg: '체크 여부를 확인해 주세요.',
    name: 'third',
  },
];

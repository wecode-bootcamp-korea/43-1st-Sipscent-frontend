import React, { useState } from 'react';
import './Main.scss';
import Login from '../../components/Login/Login';

const Main = () => {
  //모달 기본 꺼짐
  const [modalOpen, setModalOpen] = useState(false);

  //클릭하면 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={showModal}>로그인</button>
      {modalOpen && <Login setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Main;

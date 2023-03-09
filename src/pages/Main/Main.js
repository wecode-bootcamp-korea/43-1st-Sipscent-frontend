import React, { useState } from 'react';
import './Main.scss';
import Signup from '../Signup/Signup';

const Main = () => {
  //모달 기본 꺼짐
  const [modalOpen, setModalOpen] = useState(false);

  //클릭하면 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={showModal}>회원가입</button>
      {modalOpen && <Signup setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Main;

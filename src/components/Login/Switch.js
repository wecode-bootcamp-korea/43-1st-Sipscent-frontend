import React, { useState } from 'react';
import Modal from './Modal';

const Switch = () => {
  //기본 모달 노출 꺼짐 상태
  const [modalOpen, setModalOpen] = useState(false);

  //모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  console.log(modalOpen);
  return (
    <div style={{ backgroundColor: 'gray', height: '100vh' }}>
      <button onClick={showModal}>클릭하면 모달 띄움</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Switch;

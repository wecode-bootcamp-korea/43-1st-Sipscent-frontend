import React from 'react';
import './Modal.scss';
//본격 모달창!
const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="container">
      <button className="close" onClick={closeModal}>
        x
      </button>
      <p>이 섹션은 모달창 입니다.</p>
    </div>
  );
};

export default Modal;

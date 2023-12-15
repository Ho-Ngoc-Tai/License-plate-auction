import React, { useState } from 'react';
import ModalAddNew from '../components/ModalAddNew';

const Contact = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={handleOpenModal}>Open Modal</button>

      {/* Hiển thị modal khi isShowModal là true */}
      {isShowModal && (
        <ModalAddNew show={isShowModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Contact;

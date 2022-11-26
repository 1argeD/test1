import React from "react";
import ModalPortal from "../modal/Portal";
import Modal from "../modal/Modal";

const GlobalModal = ({
  content1,
  content2,
  name,
  setIsModal,
  isModal,
  onClick,
}) => {
  const handleModal = () => {
    setIsModal((isModal) => !isModal);
  };

  return (
    <div>
      <ModalPortal>
        {isModal && (
          <Modal
            onClose={handleModal}
            content1={content1}
            content2={content2}
            onClick={onClick}
            name={name}
            //
          />
        )}
      </ModalPortal>
    </div>
  );
};

export default GlobalModal;

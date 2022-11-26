import React from "react";
import styled from "styled-components";
import Button from "../elements/GlobalButton";

const Modal = ({ onClose, content1, content2, onClick, name }) => {
  return (
    <Wrapper className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <p className="content">{content1}</p>
        <p className="content">{content2}</p>
        <section className="modal-btn">
          {name ? (
            <>
              <Button
                content={"취소"}
                onClick={onClose}
                mobileWidth={"12rem"}
                width={"12rem"}
                height={"4rem"}
                color={"gray"}
              ></Button>
              <Button
                content={name}
                onClick={onClick}
                mobileWidth={"12rem"}
                width={"12rem"}
                height={"4rem"}
              ></Button>
            </>
          ) : (
            <Button
              content={"닫기"}
              onClick={onClose}
              mobileWidth={"12rem"}
              width={"12rem"}
              height={"4rem"}
            ></Button>
          )}
        </section>
      </div>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 20%;
  width: 100%;
  height: max-content;

  .modal-content {
    background-color: #fefefe;
    margin: 5rem auto;
    padding: 3.8rem 2rem;
    border: none;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
    @media (min-width: 1280px) {
      /* Desktop */
      width: 32rem;
      height: 20rem;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      /* Tablet */
      width: 32rem;
      height: 20rem;
    }
    @media (max-width: 767px) {
      /* Mobile */
      width: 32rem;
      height: 20rem;
    }

    p {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.6rem;
      text-align: center;
    }
    Button {
      margin-top: 3rem;
    }

    .modal-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

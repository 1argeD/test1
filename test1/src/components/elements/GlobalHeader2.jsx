import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow_back_ios.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const GlobalHeader2 = ({ IconType = "Home" }) => {
  const navigate = useNavigate();
  const onPathHandler = (paths) => {
    navigate(paths);
  };

  return (
    <NavbarWrapper>
      <Navbar>
        <NavItem>
          {IconType === "ArrowBack" && (
            <ArrowBackIcon onClick={() => navigate(-1)} />
          )}
          {IconType === "Home" && <HomeIcon onClick={() => navigate("/")} />}
        </NavItem>
        <NavItem onClick={() => onPathHandler("/")}>
          <Logo
            src={process.env.PUBLIC_URL + "/img/logo_gnb2@2x.png"}
            alt="멍냥마켓 로고"
          ></Logo>
        </NavItem>
        <NavItem></NavItem>
      </Navbar>
    </NavbarWrapper>
  );
};

export default GlobalHeader2;

const NavbarWrapper = styled.div`
  position: fixed;
  height: 4.8rem;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 5;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.headerMainColor};
  color: ${({ theme }) => theme.headerTxtColor};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  gap: 2rem;
  cursor: pointer;
  width: fit-content;
`;

const Logo = styled.img`
  @media (min-width: 1280px) {
    /* Desktop */
    margin-left: -3rem;
    width: 9.3rem;
    height: 2.3rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    margin-left: -2rem;
    width: 9.3rem;
    height: 2.3rem;
  }
  @media (min-width: 361px) and (max-width: 767px) {
    /* Mobile */
    margin-left: -2rem;
    width: 9rem;
    height: 2.3rem;
  }
  @media (max-width: 360px) {
    /* Mobile */
    margin-left: -2.6rem;
    width: 8rem;
    height: 2.1rem;
  }
`;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <Navigation>
          <Navs to="/">Home</Navs>
          <Navs to="/newcreate">Create New</Navs>
          <Navs to="/register">Register</Navs>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #4c8bf5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka One", cursive;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 25px;
  margin: 0 30px;
`;
const Navigation = styled.div`
  display: flex;
  color: #fff;
`;
const Navs = styled(NavLink)`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.45);
  }
`;

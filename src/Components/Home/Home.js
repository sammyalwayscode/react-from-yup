import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <ImGDiv />
          <Others>
            <Title>Google Fonts</Title>
            <Dsc>
              Google Fonts is a library of 1,321 free licensed font families and
              APIs for convenient use via CSS and Android. The library also has
              delightful and beautifully crafted icons for common actions and
              items.
            </Dsc>
            <Price>$200.53</Price>
          </Others>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  min-height: 90vh;
`;
const Wrapper = styled.div``;

const Card = styled.div`
  height: 300px;
  width: 400px;
  background-color: #fff;
  font-family: "Fredoka One", cursive;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
`;

const ImGDiv = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
  background-color: aliceblue;
`;
const Others = styled.div`
  width: 200px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Title = styled.div`
  font-size: 23px;
  margin-bottom: 20px;
`;
const Dsc = styled.div`
  text-align: center;
  font-size: small;
  margin-bottom: 10px;
`;
const Price = styled.div``;

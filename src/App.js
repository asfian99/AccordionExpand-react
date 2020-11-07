import React from "react";
import styled from "styled-components";

import Left from "./components/Left";
import Right from "./components/Right";

const Container = styled.article`
  background: #fff;
  border-radius: 6px;
  width: 70vw;
  min-height: 70vh;
  padding: 2rem;
  margin: 15vh auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

function App() {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
}

export default App;

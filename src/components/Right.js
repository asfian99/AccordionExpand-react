import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  border: 1px solid red;
  flex: 1.5;
`;

const Right = () => {
  return (
    <Wrapper>
      <h1>Hello World</h1>
    </Wrapper>
  );
};

export default Right;

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  border: 1px solid red;
  flex: 1;
`;
const Title = styled.p`
  color: #33445b;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Left = () => {
  return (
    <Wrapper>
      <Title>Questions And Answers About Login</Title>
    </Wrapper>
  );
};

export default Left;

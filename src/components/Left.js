import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
`;
const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const Left = () => {
  return (
    <Wrapper>
      <Title>Questions And Answers About Login</Title>
    </Wrapper>
  );
};

export default Left;

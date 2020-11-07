import React from "react";
import styled from "styled-components";
// Import Data
import { data } from "../data";
// Import Styled Components
import { Button, Card, Question, Answer } from "./StyledComponents";

const Wrapper = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ExpandBtn = styled(Button)`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

const Right = () => {
  return (
    <Wrapper>
      {data.map((qna) => {
        return (
          <Card key={qna.id}>
            <Question>
              {qna.question}
              <ExpandBtn>+</ExpandBtn>
            </Question>
            <Answer>{qna.answer}</Answer>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default Right;

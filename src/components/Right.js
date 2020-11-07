import React from "react";
import styled from "styled-components";

// Data
import { data } from "../data";

// Styled Components
import ExpandBtn from "./StyledButton";
import Card from "./StyledCard";
import { Question, Answer } from "./StyledQnA";

const Wrapper = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

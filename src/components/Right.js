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
            <QnA {...qna} />
          </Card>
        );
      })}
    </Wrapper>
  );
};

const QnA = (props) => {
  const { question, answer } = props;
  const [isShow, setIsShow] = React.useState(false);
  const [btnSign, setBtnSign] = React.useState("+");

  const expandHandler = () => {
    if (isShow) setBtnSign("+");
    else setBtnSign("-");

    setIsShow(!isShow);
  };

  return (
    <>
      <Question>
        {question}
        <ExpandBtn onClick={expandHandler}>{btnSign}</ExpandBtn>
      </Question>
      {isShow ? <Answer>{answer}</Answer> : ""}
    </>
  );
};

export default Right;

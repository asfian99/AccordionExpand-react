import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border: 2px solid #eee;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background: lightblue;
  color: blue;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Question = styled.h4`
  /* margin: 0 0 1rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Answer = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #405568;
`;

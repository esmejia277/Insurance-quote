import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultQuote = styled.p`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26C6DA;
    background-color: rgba(127, 224, 237);
    margin-top: 1rem;
    position: relative;

`

const Result = ({ quote }) => {
  return (
    <>
      <h1>Resultado</h1>
      <ResultQuote>
        <TransitionGroup
            component="p"
            className="resultado"
        >
            <CSSTransition
                classNames="resultado"
                key={quote}
                timeout={{enter: 500, exit: 500}}
            >
                <QuoteText>El total es: ${quote}</QuoteText>
            </CSSTransition>
        </TransitionGroup>

      </ResultQuote>
    </>
  );
};

export default Result;

import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultQuote = styled.div`
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
        <QuoteText>El total es: ${quote}</QuoteText>
      </ResultQuote>
    </>
  );
};

Result.prototype = {
  quote: PropTypes.number.isRequired
}

export default Result;

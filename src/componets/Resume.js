import React from "react";
import styled from "@emotion/styled";

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
  text-transform: capitalize;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  return (
    <ContainerResume>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Año: {year}</li>
        <li>Plan: {plan}</li>
      </ul>
    </ContainerResume>
  );
};

export default Resume;

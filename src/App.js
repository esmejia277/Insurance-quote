import React from 'react';
import styled from '@emotion/styled';
import Header from './componets/Header';
import Form from './componets/Form';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;

`;

function App() {
  return (
    <Container>
      <Header title="Cotizador de seguros" />

      <ContainerForm>
        <Form />
        
      </ContainerForm>

    </Container>
    
  );
}

export default App;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './componets/Header';
import Form from './componets/Form';
import Resume from './componets/Resume';
import Result from './componets/Result';



const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;

`;

function App() {

  const [resume, setResume] = useState({})
  
  const { data, quote } = resume;


  return (
    <Container>
      <Header title="Cotizador de seguros" />

      <ContainerForm>
        <Form
          setResume={setResume}
        
        />
        {
          data ?
          <> 
            <Resume data={data}/>
            <Result quote={quote} />
          </>
          :
          null
        }

        
        
      </ContainerForm>

    </Container>
    
  );
}

export default App;

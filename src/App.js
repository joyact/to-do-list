import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import TodoHead from './components/TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHead />
      </Template>
    </>
    //
  );
}

export default App;

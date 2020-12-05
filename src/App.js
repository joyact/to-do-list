import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>To Do List</Template>
    </>
    //
  );
}

export default App;

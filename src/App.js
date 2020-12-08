import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './components/TodoContext';
import Template from './components/Template';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </Template>
    </TodoProvider>
    //
  );
}

export default App;

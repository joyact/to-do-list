import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ListBlock = styled.div`
  flex: 1; // 차지할 수 있는 모든 영역 차지
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <ListBlock>
      <TodoItem />
    </ListBlock>
  );
}

export default TodoList;

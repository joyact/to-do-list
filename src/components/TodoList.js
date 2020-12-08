import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const ListBlock = styled.div`
  flex: 1; // 차지할 수 있는 모든 영역 차지
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const list = useTodoState();
  return (
    <ListBlock>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </ListBlock>
  );
}

export default TodoList;

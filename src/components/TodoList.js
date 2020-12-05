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
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={false} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </ListBlock>
  );
}

export default TodoList;

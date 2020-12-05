import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div``;
const Text = styled.div``;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    // 컴포넌트 바로 선택 가능
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem() {
  return (
    <ItemBlock>
      <CheckCircle></CheckCircle>
      <Text>TODOLIST 만들기</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </ItemBlock>
  );
}

export default TodoItem;

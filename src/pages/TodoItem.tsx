import styled from 'styled-components';
import { Check, Trash } from 'styled-icons/fa-solid';

const ItemContainer = styled.div`
  height: 80px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ItemButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 50%;
  color: #ff1f5a;
  background-color: #e1e1e1;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const TodoItem = () => {
  return (
    <ItemContainer>
      <span>Todo Item</span>
      <ButtonWrapper>
        <ItemButton>
          <Check />
        </ItemButton>
        <ItemButton>
          <Trash />
        </ItemButton>
      </ButtonWrapper>
    </ItemContainer>
  );
};

export default TodoItem;

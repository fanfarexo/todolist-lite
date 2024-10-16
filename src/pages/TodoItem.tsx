import styled from 'styled-components';
import { Check, Trash } from 'styled-icons/fa-solid';
import { DeleteTodoType, TodoItemType, ToggleDoneType } from '../AppContainer';
import { useNavigate } from 'react-router';

const ItemContainer = styled.div`
  height: 80px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.span<{ $done: boolean }>`
  color: ${(props) => (props.$done ? '#d0d0d0' : '#8c8c8c')};
  text-decoration: ${(props) => (props.$done ? 'line-through' : 'none')};
  text-decoration-color: #ff1f5a;
  transition: color 0.1s ease;
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

type PropsType = {
  todoItem: TodoItemType;
  toggleDone: ToggleDoneType;
  deleteTodo: DeleteTodoType;
};

const TodoItem = (props: PropsType) => {
  const navigate = useNavigate();
  const goEdit = () => navigate('edit/' + props.todoItem.id);

  const deleteTodoHandler = (id: number) => {
    if (window.confirm('할 일을 삭제할까요?')) {
      props.deleteTodo(id);
    }
    return;
  };

  return (
    <ItemContainer>
      <ItemText $done={props.todoItem.done} onClick={goEdit}>
        {props.todoItem.todo}
      </ItemText>
      <ButtonWrapper>
        <ItemButton onClick={() => props.toggleDone(props.todoItem.id)}>
          <Check />
        </ItemButton>
        <ItemButton onClick={() => deleteTodoHandler(props.todoItem.id)}>
          <Trash />
        </ItemButton>
      </ButtonWrapper>
    </ItemContainer>
  );
};

export default TodoItem;

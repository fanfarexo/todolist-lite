import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.ul`
  color: #8c8c8c;
  font-size: x-large;
  font-weight: bold;
  padding-top: 50px;
`;

const TodoList = () => {
  return (
    <List>
      <TodoItem />
      <TodoItem />
    </List>
  );
};

export default TodoList;

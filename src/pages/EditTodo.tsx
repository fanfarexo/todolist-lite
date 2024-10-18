import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../features/todosSlice';
import { RootState } from '../app/store';

const Form = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #6f6f6f;
  h2 {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  transition: border-color 0.3s ease;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  margin: 5px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #6f6f6f;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff1f5a;
    color: #fff;
  }
`;

type TodoParam = { paramId?: string };

const EditTodo = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);

  const { paramId } = useParams<TodoParam>();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todoList);
  const todoItem = todoList.find((todo) => todo.id === parseInt(paramId ?? '0'));

  useEffect(() => {
    if (todoItem) {
      setTitle(todoItem.title);
      setDesc(todoItem.desc);
      setDone(todoItem.done);
    }
  }, [todoItem]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoItem?.id !== undefined) {
      dispatch(editTodo({ id: todoItem.id, title, desc, done }));
    }
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Todo</h2>
      <Label htmlFor='todo'>Todo</Label>
      <Input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Label htmlFor='desc'>Description</Label>
      <Textarea id='desc' rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
      <Label>Done</Label>
      <CheckBox checked={done} onChange={(e) => setDone(e.target.checked)} />
      <ButtonWrapper>
        <Button type='submit'>Edit</Button>
        <Button type='button' onClick={() => navigate('/')}>
          Cancel
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default EditTodo;

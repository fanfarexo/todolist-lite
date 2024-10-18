import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todosSlice';

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

const AddTodo = () => {
  const [todo, setTodo] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === '') {
      alert('반드시 할 일을 입력해야 합니다.');
      return;
    }
    dispatch(addTodo({ todo, desc }));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <Label htmlFor='todo'>Todo</Label>
      <Input type='text' id='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Label htmlFor='desc'>Description</Label>
      <Textarea id='desc' rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
      <ButtonWrapper>
        <Button type='submit'>Add</Button>
        <Button type='button' onClick={() => navigate('/')}>
          Cancel
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AddTodo;

import { useState } from 'react';
import styled from 'styled-components';

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

const EditTodo = () => {
  const [todo, setTodo] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  return (
    <Form>
      <h2>Edit Todo</h2>
      <Label htmlFor='todo'>Todo</Label>
      <Input type='text' id='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Label htmlFor='desc'>Description</Label>
      <Textarea id='desc' rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
      <ButtonWrapper>
        <Button type='submit'>Edit</Button>
        <Button type='button'>Cancel</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default EditTodo;

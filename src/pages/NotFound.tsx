import { useNavigate } from 'react-router';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  height: 100vh;
  color: #343a40;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: xxx-large;
`;

const Message = styled.span`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 100px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #6f6f6f;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #ff1f5a;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>페이지를 찾을 수 없습니다.</Message>
      <Button onClick={() => navigate('/')}>홈으로</Button>
    </NotFoundContainer>
  );
};

export default NotFound;

import styled from 'styled-components';
import AppRoute from './AppRoute';

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const AppContainer = () => {
  return (
    <Container>
      <AppRoute />
    </Container>
  );
};

export default AppContainer;

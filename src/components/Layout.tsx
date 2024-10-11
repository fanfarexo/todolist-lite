import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutletWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

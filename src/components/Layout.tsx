import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

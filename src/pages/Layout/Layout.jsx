import {
  Container,
  Header,
  MenuLink,
} from '../../components/SharedLayout/SharedLayout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <Container>
      <Header>
        <MenuLink to="/" end>
          Home
        </MenuLink>
        <MenuLink to="/tweets">Tweets</MenuLink>
      </Header>

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer />
        <Toaster position="top-center" reverseOrder={false} />
      </main>
    </Container>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
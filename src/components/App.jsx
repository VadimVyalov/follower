import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../pages/Layout/Layout';
// const Layout = lazy(() => import('../pages/Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

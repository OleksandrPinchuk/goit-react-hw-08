import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import { refreshUser } from '../redux/auth/operations.js';
import { selectIsRefreshing } from '../redux/auth/selectors.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<p>Please wait, updating user info...</p>) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />} />
          <Route path="login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
          <Route path="contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
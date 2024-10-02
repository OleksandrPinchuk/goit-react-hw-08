
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import Layout from './Layout/Layout';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import { refreshUser } from '../redux/auth/operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />} />
          <Route path="login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
          <Route path="contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;





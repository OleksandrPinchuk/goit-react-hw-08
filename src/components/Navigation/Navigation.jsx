// src/components/Navigation/Navigation.jsx
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={''}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={''}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

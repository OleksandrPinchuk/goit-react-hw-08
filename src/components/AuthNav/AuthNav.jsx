import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" className={''}>Register</NavLink>
      <NavLink to="/login" className={''}>Login</NavLink>
    </nav>
  );
};

export default AuthNav;
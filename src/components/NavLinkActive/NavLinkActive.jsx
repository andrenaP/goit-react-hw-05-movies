import { NavLink } from 'react-router-dom';
const activeClassName = {
  color: '#2196f3',
};
const NavLinkActive = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkActive;

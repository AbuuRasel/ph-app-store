import React, { Children } from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
  return (
    <NavLink className={({isActive})=> `pb-1 ${isActive? 'text-purple-500 border-b border-purple-500':''}`} to={to}>
     {children}
    </NavLink>
  );
};

export default MyNavLink;
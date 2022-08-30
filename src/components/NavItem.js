import { Link } from "react-router-dom";
import React from 'react';

export default function NavItem(props) {
  const {to, isActive} = props;

  return (
    <Link
      className={`nav-item ${isActive ? 'active' : ''}`}
      to={to}
    >
      {props.children}
    </Link>
  );
}

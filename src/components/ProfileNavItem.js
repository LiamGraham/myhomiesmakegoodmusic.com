import { Link } from "react-router-dom";
import React from 'react';

export default function ProfileNavItem(props) {
  const {to, isActive, handleClick} = props;

  return (
    <Link
      className={`nav-item ${isActive && 'active'}`}
      to={to}
    >
      {props.children}
    </Link>
  );
}

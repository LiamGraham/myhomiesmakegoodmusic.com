import { getIds, getProfile } from '../data/profiles.js';
import { useLocation, useMatch } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react';
import NavItem from './NavItem.js'

const toPath = (id) => {
  return '/' + id;
}

const HOME_PATH = '/'
const IDS = getIds();
const DEFAULT_ACTIVE = Object.fromEntries(IDS.map((id) => {
  return [toPath(id), false];
}));
DEFAULT_ACTIVE[HOME_PATH] = false;

export default function Nav() {
  const renderNavItem = (to, text) => {
    return (
      <NavItem to={to} isActive={active[to]}>
        {text}
      </NavItem>
    )
  }

  let location = useLocation();
  const [active, setActive] = useState(DEFAULT_ACTIVE);
  const navItems = IDS.map((id, index) => {
    const profile = getProfile(id);
    return (
      <Fragment key={id}>
        {renderNavItem(toPath(id), profile.name)}
        {
          index < IDS.length - 1 &&
          <span className='no-select'>
            •
          </span>
        }
      </Fragment>
    )
  })

  useEffect(() => {
    const path = location.pathname;
    if (!Object.hasOwn(active, path)) {
      setActive(DEFAULT_ACTIVE);
    } else {
      setActive({...DEFAULT_ACTIVE, [location.pathname]: true})
    }

  }, [location]);

  return (
    <div className='profile-nav'>
      {renderNavItem('/', '☻')}
      {navItems}
    </div>
  )
}

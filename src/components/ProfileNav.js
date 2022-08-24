import { getIds, getProfile } from '../data/profiles.js';
import { useLocation, useMatch } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react';
import ProfileNavItem from './ProfileNavItem.js'

const toPath = (id) => {
  return '/' + id;
}

const IDS = getIds();
const DEFAULT_ACTIVE = Object.fromEntries(IDS.map((id) => {
  return [toPath(id), false];
}));

export default function ProfileNav() {
  const renderNavItem = (to, text) => {
    return (
      <ProfileNavItem to={to} isActive={active[to]}>
        {text}
      </ProfileNavItem>
    )
  }

  let location = useLocation();
  const [active, setActive] = useState(DEFAULT_ACTIVE);
  const items = IDS.map((id, index) => {
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
    setActive({...DEFAULT_ACTIVE, [location.pathname]: true})
  }, [location]);

  return (
    <div className='profile-nav'>
      {renderNavItem('/', '☻')}
      {items}
    </div>
  )
}

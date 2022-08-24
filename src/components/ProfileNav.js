import { getIds, getProfile } from '../data/profiles.js';
import { Link } from "react-router-dom";
import { Fragment } from 'react';

function handleScroll(event) {
  console.log(event)
}

export default function ProfileNav(props) {
  const {ids} = props;
  const items = ids.map((id, index) => {
    const profile = getProfile(id);
    return (
      <Fragment key={id}>
        <Link className='nav-item' to={id}>
          {profile.name}
        </Link>
        {
          index < ids.length - 1 &&
          <span className='no-select'>
            •
          </span>
        }
      </Fragment>
    )
  })

  return (
    <div className='profile-nav'>
      <Link to='/'>☻</Link>
      {items}
    </div>
  )
}

import { getIds, getProfile } from '../data/profiles.js';
import { Link } from "react-router-dom";

function handleScroll(event) {
  console.log(event)
}

export default function ProfileNav(props) {
  const {ids} = props;
  const items = ids.map((id, index) => {
    const profile = getProfile(id);
    return (
      <>
        <Link key={id} className='nav-item' to={id}>
          {profile.name}
        </Link>
        {
          index < ids.length - 1 &&
          <span key={`sep-${index}`} className='no-select'>
            •
          </span>
        }
      </>
    )
  })

  return (
    <div className='profile-nav'>
      {items}
    </div>
  )
}

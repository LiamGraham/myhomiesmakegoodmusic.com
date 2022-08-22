import { getIds, getProfile } from '../data/profiles.js';


function handleScroll(event) {
  console.log(event)
}

export default function ProfileSelector() {
  const ids = getIds();
  const names = ids.map((id) => {
    const profile = getProfile(id);
    return (
      <div className='selector-item' key={id}>
        <a href={id}>
          {profile.name}
        </a>
      </div>
    )
  })

  return (
    <div className='profile-selector'>
      <div className='name-list' onScroll={handleScroll}>
        {names}
      </div>
    </div>
  )
}

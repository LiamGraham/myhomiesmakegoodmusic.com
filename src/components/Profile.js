import { getProfile } from '../data/profiles.js';
import ProfileLinks from './ProfileLinks.js';

export default function Profile(props) {
  const {id} = props;
  const profile = getProfile(id)

  return (
    <div className='profile'>
      <h1>
        <span className='profile-name'>{profile.name}</span> makes good music.
      </h1>

      <p className='profile-bio'>
        {profile.bio}
      </p>

      <ProfileLinks links={profile.links}/>
    </div>
  )
}

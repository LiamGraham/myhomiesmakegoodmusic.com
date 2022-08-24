import { getProfile, isMe } from '../data/profiles.js';
import ProfileLinks from './ProfileLinks.js';

export default function Profile(props) {
  const {id} = props;
  const profile = getProfile(id)

  return (
    <div className='profile'>
      <h1>
        <span className='blue'>{profile.name}</span> {isMe(id) ? 'made this website' : 'makes good music'}.
      </h1>

      <p className='profile-bio'>
        {profile.bio}
      </p>

      <ProfileLinks links={profile.links}/>
    </div>
  )
}

import { getProfile } from '../data/profiles.js';
import ProfileLinks from './ProfileLinks.js';

export default function Profile(props) {
  const {id} = props;
  console.log(`Rendering Profile with id '${id}'`)
  const data = getProfile(id)

  return (
    <div className='profile'>
      <h1>
        <span className='profile-name'>{data.name}</span> makes good music.
      </h1>

      <ProfileLinks links={data.links}/>
    </div>
  )
}

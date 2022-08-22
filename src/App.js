import { getRandomId, profileExists } from './data/profiles.js';
import Profile from './components/Profile.js';
import ProfileSelector from './components/ProfileSelector.js';

export function App() {
  // const path = window.location.pathname.substring(1).toLowerCase();
  // let id = profileExists(path) ? path : getRandomId();

  return (
    <main>
      {/* <Profile id={id}/> */}
      <ProfileSelector/>
    </main>
  );
}

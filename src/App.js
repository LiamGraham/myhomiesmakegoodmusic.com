import { getIds, getRandomId, profileExists } from './data/profiles.js';
import ProfileNav from './components/ProfileNav.js';
import Profile from './components/Profile.js';
import NotFound from './components/NotFound.js';
import { Routes, Route } from "react-router-dom";

export default function App() {
  const ids = getIds();
  const routes = ids.map((id) => {
    return (
      <Route 
        path={id}
        key={id}
        element={<Profile id={id}/>}
      />
    )
  });

  return (
    <main>
      <ProfileNav ids={ids}/>
      <Routes>
        {routes}
      <Route 
        exact path="/"
        element={<Profile id={getRandomId()}/>}
      />
      <Route 
        path="*"
        element={<NotFound/>}
      />
      </Routes>
    </main>
  );
}

import { getIds } from './data/profiles.js';
import ProfileNav from './components/ProfileNav.js';
import Profile from './components/Profile.js';
import Home from './components/Home.js';
import NotFound from './components/NotFound.js';
import { Routes, Route } from "react-router-dom";

export default function App() {
  const ids = getIds();
  const profileRoutes = ids.map((id) => {
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
      {profileRoutes}
      <Route 
        exact path="/"
        element={<Home/>}
      />
      <Route 
        path="*"
        element={<NotFound/>}
      />
      </Routes>
    </main>
  );
}

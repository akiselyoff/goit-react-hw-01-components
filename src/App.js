import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import data from './data/data.json';
export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        //   {...user} alternative use props
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
}

import { useQuery } from 'react-query';
import axios from 'axios';

import LogoIcon from './components/Icons/LogoIcon';
import styles from './App.module.css';

async function fetchPosts() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
}

async function fetchStatus() {
  const { data } = await axios.get('https://api.movies.devmentor.online/prod');
  return data;
}

function App(): JSX.Element {
  const { data: posts } = useQuery('posts', fetchPosts);
  const { data: status } = useQuery('status', fetchStatus);

  console.log(posts, status);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <LogoIcon />
        <p>DevMentor My Movies</p>
        {status && <p>Status: {status.message}</p>}
        {posts && (
          <ul>
            {posts.map((post: { title: string }, index: number) => {
              return <li key={index}>{post.title}</li>;
            })}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;

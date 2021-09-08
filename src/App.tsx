import { useQuery } from 'react-query';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

async function fetchPosts() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
}

async function fetchStatus() {
  const { data } = await axios.get('https://api.movies.devmentor.online');
  return data;
}

function App(): JSX.Element {
  const { data: posts } = useQuery('posts', fetchPosts);
  const { data: status } = useQuery('status', fetchStatus);

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>Status: {status && status.message}</p>
        <p>My Movies:</p>
        {posts &&
          posts.map((post: { title: string }, index: number) => {
            return <li key={index}>{post.title}</li>;
          })}
        <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

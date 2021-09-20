import { useQuery } from 'react-query';
import axios from 'axios';

import LogoIcon from './components/Icons/LogoIcon';
import styles from './App.module.css';

async function fetchStatus() {
  const { data } = await axios.get('https://api.movies.devmentor.online/prod');
  return data;
}

function App(): JSX.Element {
  const { data: status } = useQuery('status', fetchStatus);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <LogoIcon />
        <p>My Movies</p>
        {status && <p>Status: {status.message}</p>}
      </header>
    </div>
  );
}

export default App;

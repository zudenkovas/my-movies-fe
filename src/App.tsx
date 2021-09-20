import { useQuery } from 'react-query';
import axios from 'axios';

import LogoIcon from './components/Icons/LogoIcon';
import styles from './App.module.css';

async function fetchStatus() {
  const { data } = await axios.get('http://localhost:3001/health');
  return data;
}

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <LogoIcon />
        <p>My Movies</p>
        <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
      </header>
    </div>
  );
}

export default App;

import { useQuery } from 'react-query';
import axios from 'axios';

import LogoIcon from './components/Icons/LogoIcon';
import Layout from './components/Layout';

async function fetchStatus() {
  const { data } = await axios.get('http://localhost:3001/health');
  return data;
}

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout
      footer={<footer>Footer</footer>}
      header={
        <header>
          <LogoIcon />
          Header
        </header>
      }
      sidebar={<div>Sidebar</div>}
    >
      <p>My Movies</p>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;

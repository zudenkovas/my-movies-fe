import { useQuery } from 'react-query';
import axios from 'axios';
import Layout from 'components/Layout';
import Header from 'components/Header';

async function fetchStatus() {
  const { data } = await axios.get('http://localhost:3001/health');
  return data;
}

// TODO: Add footer to the page
function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout footer={<div>Footer</div>} header={<Header />} sidebar={<div>Sidebar</div>}>
      <p>My Movies</p>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;

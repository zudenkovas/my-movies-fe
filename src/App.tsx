import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainRouter from 'containers/MainRouter';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout footer={<Footer />} header={<Header />}>
        <MainRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

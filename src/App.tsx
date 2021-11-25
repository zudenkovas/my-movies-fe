import { BrowserRouter } from 'react-router-dom';
import ProfileProvider from 'prividers/ProfileProvider';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainRouter from 'navigation';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <Layout footer={<Footer />} header={<Header />}>
          <MainRouter />
        </Layout>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;

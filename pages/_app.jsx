import Layout from '@/components/layout';
// eslint-disable-next-line import/extensions
import '@/styles/globals.css';

const App = ({ Component, pageProps }) =>
  <Layout>
    <Component {...pageProps} />
  </Layout>;

export default App;

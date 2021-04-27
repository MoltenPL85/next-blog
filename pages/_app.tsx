import { AppProps } from 'next/dist/next-server/lib/router/router';
import Layout from '../conponents/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div id="notifications" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Chakra from '../components/Chakra';
import { AnimatePresence } from 'framer-motion';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={null}>
      <Layout seoTitle={''} router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;

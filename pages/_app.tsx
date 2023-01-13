import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';

import Layout from '../components/layouts/main';
import Chakra from '../components/layouts/Chakra';
import Fonts from '../components/layouts/Fonts';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

interface PageProps {
  [key: string]: any;
}

interface MyAppProps extends AppProps<PageProps> {
  pageProps: PageProps;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout seoTitle={'Oliver Patrick'} router={router}>
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

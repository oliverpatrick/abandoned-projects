/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import styled from 'styled-components/macro';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { AboutPage } from './pages/AboutPage/Loadable';
import { ContactPage } from './pages/ContactPage/loadable';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Example"
        defaultTitle="Example"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/example-react-site" component={HomePage} />
          <Route path="/example-react-site/about" component={AboutPage} />
          <Route path="/example-react-site/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
}

const Layout = styled.div`
  padding-top: 4.5rem;
`;

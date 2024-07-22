import React from 'react';
// import Header from 'components/Header'
import Footer from 'components/Footer';
import { Page, Container } from './PageBase.styles';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const PageBase = ({ children }: Props) => {
  return (
    <Page>
      {children}
      <Footer />
    </Page>
  );
};

export default PageBase;

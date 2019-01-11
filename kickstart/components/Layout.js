import React from 'react';
import { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head'; //if we put anything inside this it will automatically gets in the head
import Header from './Header';

export default (props) => {
  return (
      <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
      </Head>
      <Header />
        {props.children}
      </Container>
  );
};

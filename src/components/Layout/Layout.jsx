// import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header/>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  /* padding: 0 128px; */
`;
import React from 'react';
import { Footer } from '~/components';

const DefaultLayout = ({ children }) => {
  return (
    <div className='layout layout-default'>
      <main className='layout-main'>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

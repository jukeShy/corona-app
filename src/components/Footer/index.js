import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='app-footer'>
      <p>
        Provided by{' '}
        <a
          href='https://github.com/mathdroid/covid-19-api'
          target='_blank'
          rel='noopener noreferrer'
        >
          Covid-19 Api
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { render } from 'react-dom';
import { Home } from '~/pages';

import 'milligram/dist/milligram.min.css';
import './index.scss';

const root = document.getElementById('root');
render(<Home />, root);

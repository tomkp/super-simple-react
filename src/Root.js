import React from 'react';
import { render } from 'react-dom';
import './root.scss';

import Application from './components/application/Application';

render(
    <Application />,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';

// App Component
import { App } from './App';

// Theme Styles
import './_assets/css/style.css';
import './_assets/css/responsive.css';
import './_assets/css/hack.css';

render(
    <App />,
    document.getElementById('app')
);
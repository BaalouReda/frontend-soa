import { GlobalStyles } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyles
            styles={{
                html: {
                    '-webkit-font-smoothing': 'antialiased',
                    '-moz-osx-font-smoothing': 'grayscale',
                    height: '100%',
                    width: '100%'
                },
                '*, *::before, *::after': {
                    boxSizing: 'inherit',
                    padding: 0,
                    margin: 0
                }
            }}
        />
        <App />
    </React.StrictMode>
);

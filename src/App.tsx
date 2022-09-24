import React from 'react';
import { HomePage } from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConcourPage } from './pages/ConcourPage';
import { EtudiantPage } from './pages/EtudiantPage';
import axios from 'axios';

const headers: any = {
    'Access-Control-Allow-Origin': '*'
};

axios.defaults.baseURL = 'http://localhost:8082/';
axios.defaults.headers = headers;

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            index: true
        },
        {
            path: '/concours',
            element: <ConcourPage />
        },
        {
            path: '/etudiants',
            element: <EtudiantPage />
        }
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

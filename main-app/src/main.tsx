import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import App from './App.tsx'
import ScrollToTop from './Layout/ScrollToTop.component';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssVarsProvider>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </CssVarsProvider>
    </React.StrictMode>,
)


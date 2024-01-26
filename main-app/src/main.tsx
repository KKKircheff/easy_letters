import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import App from './App.tsx'
import ScrollToTop from './layout/ScrollToTop.component.tsx';
import { theme } from './styles/theme.ts'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </CssVarsProvider>
    </React.StrictMode>,
)


import { createContext, useState, useContext, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.scss';
import AOS from 'aos'


import Layout from './layout/Layout.component';

import PageLoaderSkeleton from "./components/pageLoaderSkeleton/PageLoaderSkeleton.component";
import Box from "@mui/joy/Box";
const Home = lazy(() => import('./routes/Home/Home.component'));
const Resources = lazy(() => import('./routes/Resources/Resources.component'));
const Pricing = lazy(() => import('./routes/Pricing/Pricing.component'));
const AiWriter = lazy(() => import('./routes/AI_Writer/AiWriter.component'));

// export type ToggleContextType = {
//     toggleView: boolean;
//     setToggleView: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// export const useToggleContext = (): ToggleContextType | undefined => {
//     return useContext(ToggleContext);
// };

function App() {
    // const [toggleView, setToggleView] = useState(false);

    useEffect(() => {
        /* ! important how to init AOS in Vite */
        AOS.init({
            easing: 'ease-in',
            delay: 50,
            duration: 300,
            offset: 50,
            anchorPlacement: 'bottom-center',
        })
    }, []);

    return (
        <Box sx={{ width: '100vw', m: 0, p: 0 }}>
            {/* <ToggleContext.Provider value={{ toggleView, setToggleView }}> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <Suspense fallback={<PageLoaderSkeleton />}>
                            <Home />
                        </Suspense>} />
                    <Route path={`/resources`} element={
                        <Suspense fallback={<PageLoaderSkeleton />}>
                            <Resources />
                        </Suspense>
                    } />
                    <Route path={`/pricing`} element={
                        <Suspense fallback={<PageLoaderSkeleton />}>
                            <Pricing />
                        </Suspense>
                    } />
                    <Route path={`/ai-writer`} element={
                        <Suspense fallback={<PageLoaderSkeleton />}>
                            <AiWriter />
                        </Suspense>
                    } />
                    <Route path={`/*`} element={
                        <Suspense fallback={<PageLoaderSkeleton />}>
                            <Home />
                        </Suspense>} />
                </Route>
            </Routes>
            {/* </ToggleContext.Provider> */}
        </Box>
    )
}

export default App;

// export { ToggleContext };

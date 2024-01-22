import { createContext, useState, useContext, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.scss';
import AOS from 'aos'


import Layout from './Layout/Layout.component';

import PageLoaderSkeleton from "./components/pageLoaderSkeleton/PageLoaderSkeleton.component";

const Home = lazy(() => import('./routes/Home/Home.component'));
const Contact = lazy(() => import('./routes/Contact/Contact.component'));

export type ToggleContextType = {
    toggleView: boolean;
    setToggleView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const useToggleContext = (): ToggleContextType | undefined => {
    return useContext(ToggleContext);
};


function App() {
    const [toggleView, setToggleView] = useState(false);

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
        <div className="App">
            <ToggleContext.Provider value={{ toggleView, setToggleView }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Home />
                            </Suspense>} />
                        <Route path={`/contact`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Contact />
                            </Suspense>
                        } />
                        <Route path={`/*`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Home />
                            </Suspense>} />
                    </Route>
                </Routes>
            </ToggleContext.Provider>
        </div>
    )
}

export default App;

export { ToggleContext };

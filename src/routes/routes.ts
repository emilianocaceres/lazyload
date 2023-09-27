import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/*webpackChunkName: 'LazyLayout' */'../01-lazyload/layout/LazyLayout'));

export const routes:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component:LazyLayout,
        name:'Lazy-1' 
    },
    {
        to: '/no-lazy',
        path: 'nolazy',
        Component:NoLazy,
        name:'No-Lazy' 
    },
]
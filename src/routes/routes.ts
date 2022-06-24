import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { RouteData } from "./types/types";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";



export const routes: RouteData[] = [
    {to: '/lazy1', path:'lazy1', Component: LazyPage1, name: 'About Us' },
    {to: '/lazy2', path:'lazy2', Component: LazyPage2, name: 'Help' },
    {to: '/lazy3', path:'lazy3', Component: LazyPage3, name: 'Contact Us' },
]

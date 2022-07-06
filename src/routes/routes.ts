import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { RouteData } from "./types/types";



export const routes: RouteData[] = [
    {to: '/', path:'', Component: LazyPage2, name: 'Shop' },
    {to: '/about', path:'About', Component: LazyPage1, name: 'About' },
    {to: '/contact', path:'Contact', Component: LazyPage3, name: 'Contact' },
]

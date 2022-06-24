import { LazyPage1, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import { RouteData } from "./types/types";



export const routes: RouteData[] = [
    {to: '/', path:'', Component: ShoppingPage, name: 'Shop' },
    {to: '/about', path:'About', Component: LazyPage1, name: 'About' },
    {to: '/contact', path:'Contact', Component: LazyPage3, name: 'Contact' },
]

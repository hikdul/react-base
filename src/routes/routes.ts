import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-component-patterns/components/ShoppingPage";
import { RouteData } from "./types/types";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";



export const routes: RouteData[] = [
    {to: '/shoping', path:'shoping', Component: ShoppingPage, name: 'Shoping Page' },
    {to: '/lazy1', path:'lazy1', Component: LazyPage1, name: 'About Us' },
    {to: '/lazy2', path:'lazy2', Component: LazyPage2, name: 'Help' },
    {to: '/lazy3', path:'lazy3', Component: LazyPage3, name: 'Contact Us' },
]

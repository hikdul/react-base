import { LazyPage1, LazyPage3 } from "../01-lazyload/pages";
import { FormiBasicPages } from "../03-forms/pages/FormiBasicPages";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { RouteData } from "./types/types";


export const routes: RouteData[] = [
    {to: '/register', path:'register', Component: RegisterPage, name: 'Register' },
    {to: '/basic-formik', path:'basic-formik', Component: FormiBasicPages, name: 'Basic Form whit formik' },
    {to: '/about', path:'About', Component: LazyPage1, name: 'About' },
    {to: '/contact', path:'Contact', Component: LazyPage3, name: 'Contact' },
]

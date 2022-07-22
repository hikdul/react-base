import { FormiBasicPages, FormikAbtract, FormikCompounents, FormiYupPages, RegisterPage } from "../03-forms/pages";
import { LazyPage1, LazyPage3 } from "../01-lazyload/pages";
import { RouteData } from "./types/types";


export const routes: RouteData[] = [
    {to: '/register', path:'register', Component: RegisterPage, name: 'Register' },
    {to: '/basic-formik', path:'basic-formik', Component: FormiBasicPages, name: 'Basic Form whit formik' },
    {to: '/Yup-and-formik', path:'yup-and-formik', Component: FormiYupPages, name: 'yup and formik' },
    {to: '/formik-compounents', path:'formik-compounents', Component: FormikCompounents, name: 'formik compounent' },
    {to: '/formik-abstractation', path:'formik-abstractation', Component: FormikAbtract, name: 'formik Abstractation' },
    {to: '/about', path:'About', Component: LazyPage1, name: 'About' },
    {to: '/contact', path:'Contact', Component: LazyPage3, name: 'Contact' },
]
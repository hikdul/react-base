import { ReactElement } from 'react'

export interface productCardProps
{
    product: product
    children?:  ReactElement | ReactElement[]
} 

// Generalmente esta interface estaria en un lugar para manipular estos datos
export interface product
{
    id: string
    title: string
    img?: string
}

export interface ProductImageProps  
{
    img?: string
}

export interface ProductContextProps
{
    counter: number
    AddBy: (value: number) => void
    product: product
}

//estas interface es para demostrar como se cumple en el cose de unir componentes en componentes
// esta es una interface adicional
export interface ProductCordHOCProps
{
    ({children, product}: productCardProps): JSX.Element,
    Title: ({ title }: {title?: string}) => JSX.Element,
    Image: ({ img} : {img?: string}) => JSX.Element,
    Buttons: () => JSX.Element
}


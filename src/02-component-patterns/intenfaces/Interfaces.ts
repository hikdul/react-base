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

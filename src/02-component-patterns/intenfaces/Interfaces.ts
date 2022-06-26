import { Props as ProductButtonProps } from '../components/ProductButtons'
import { productCardProps } from '../components/ProductCard'
import { ProductImageProps } from '../components/ProductImage'
import { ProducTitlePros } from '../components/ProductTitle'

// Generalmente esta interface estaria en un lugar para manipular estos datos
export interface product {
    id: string
    title: string
    img?: string
}

export interface ProductContextProps {
    counter: number
    AddBy: (value: number) => void
    product: product
}

//estas interface es para demostrar como se cumple en el cose de unir componentes en componentes
// esta es una interface adicional
export interface ProductCordHOCProps {
    ({ children, product }: productCardProps): JSX.Element,
    Title: (Props: ProducTitlePros) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonProps) => JSX.Element
}

export interface ProductInCard extends product {
    count: number
}

export interface onChangeArgs
{
    product: product
    count: number
}

export interface onChangeEventArgs
{   
    count: number
    product: product
}
import { CSSProperties, useContext } from "react"
import { product } from "../intenfaces/Interfaces"
import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from "../context/ProductContext"

//Componente para trabajar imagenes
const obtenerImagen= (img?:string, product?: product):string =>
{

    if(img) 
        return img
    else if(product && product.img)
        return product.img
    else
        return noImg
}

export const ProductImage = ({img = '', className, style}: ProductImageProps) => 
{
    const {product} = useContext(ProductContext)
    return(
            <img
                style={style}
                className={ `${styles.productImg} ${className}` }
                src={ obtenerImagen(img,product) }  
                alt={product.title} />
    )
}


export interface ProductImageProps  
{
    img?: string
    className?: string
    style?: CSSProperties
}
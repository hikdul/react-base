import { useContext } from "react"
import { product, ProductImageProps } from "../intenfaces/Interfaces"
import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard"

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

export const ProductImage = ({img = ''}: ProductImageProps) => 
{
    const {product} = useContext(ProductContext)
    return(
            <img className={ styles.productImg } src={ obtenerImagen(img,product) } alt={product.title} />
    )
}
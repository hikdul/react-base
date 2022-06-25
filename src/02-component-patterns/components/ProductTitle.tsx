// Para trabajar con es span o titulo

import { CSSProperties, useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { product } from "../intenfaces/Interfaces"
import styles from '../styles/styles.module.css'

const getTitle = (title?:string, product?:product):string =>{
    if(title)
        return title
    else if(product && product.title)
        return product.title
    else
        return ' --- '
}

export const ProductTitle = ({ title = '', className, style} : ProducTitlePros ) =>
{
    const {product} = useContext(ProductContext)
    return(
            <h4 style={style} className={`${styles.productDescription} ${className}`}>{getTitle(title,product)}</h4>
    )
}

// en el caso de las clases se agregan las clases y en el caso de los styles se hodrcodean aqui..
// sin embargo ambos subsisten
// OJO: como es en cascada en este momento se aplica primero el style, luego los estilos por defecto y por ultimo los classname
export interface ProducTitlePros
{
    title?: string
    className?: string
    style?: CSSProperties
}


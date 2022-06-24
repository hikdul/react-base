// Para trabajar con es span o titulo

import { useContext } from "react"
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

export const ProductTitle = ({ title = '' } : { title ?: string } ) =>
{
    const {product} = useContext(ProductContext)
    return(
            <span className={styles.productDescription}>{getTitle(title,product)}</span>
    )
}


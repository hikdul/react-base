
import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useProduc } from '../hooks/useProduct'
import { ReactComponentElement, ReactElement } from 'react'


export const ProductImage = ({alt, img}: ProductImageProps) => 
{
    return(
            <img className={ styles.productImg } src={img ? img : noImg } alt={alt} />
    )
}

interface ProductImageProps  
{
    alt: string
    img?: string
}

export const ProductTitle = ({ title } : { title : string } ) =>
{
    return(
            <span className={styles.productDescription}>{title}</span>
    )
}

export const ProducButtons = ({ counter, AddBy ,increment}:ProductButtonsProps) =>
{

    return(
        <div className={styles.buttonsContainer}>
            <button 
                className={styles.buttonMinus}
                onClick={() => AddBy(-increment)}>
                    -
                </button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                className={styles.buttonAdd}
                onClick={() => AddBy(increment)}>
                    +
                </button>
        </div>
    )
}

//nota en como pasar las funciones
interface ProductButtonsProps
{
    counter: number
    AddBy: (value:number)=>void
    increment: number
}

ProducButtons.defaultProps={
    increment:1
}

// ==> yo le daria la responsabilidad de obtener los datos al componente de los botones. 
// ==/==> Creo que se hace asi para facilitar la comunicacion entre hijos y padres. pero Para eso esta es useContext

export const ProductCard = ({product} : productCardProps)=> 
{
    
    const {counter, AddBy} = useProduc()
    const {img, title } = product

    return (
        <div className={ styles.productCard }>
            <ProductImage alt={title} img={img} /> 
            <ProductTitle title={title} />
            <ProducButtons counter={counter} AddBy={AddBy} />
        </div>
    )
}

interface productCardProps{
    product: product
    children?: () => ReactElement 
} 

interface  product{
    id: string
    title: string
    img?: string
}
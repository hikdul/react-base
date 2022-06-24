
import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useProduc } from '../hooks/useProduct'
import { createContext, ReactElement, useContext } from 'react'

// ==/==&==> Use Context
interface ProductContextProps
{
    counter: number
    AddBy: (value: number) => void
    product: product
}

// creamos nuestro contexto
const ProductContext = createContext({} as ProductContextProps)


// el proveedor de informacion
const { Provider } = ProductContext


// ==/==&==> 
// ==/==&==> fin del Use Context

// ==/==> diferentes componentes

//Componente para trabajar imagenes
const obtenerImagen= (img?:string, product?: product):string =>
{

    let imageToView: string

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

interface ProductImageProps  
{
    img?: string
}

// Para trabajar con es span o titulo

const getTitle = (title?:string, product?:product):string =>{
    if(title)
        return title
    else if(product && product.title)
        return product.title
    else
        return ' --- '
}

export const ProductTitle = ({ title} : { title ?: string } ) =>
{
    const {product} = useContext(ProductContext)
    return(
            <span className={styles.productDescription}>{getTitle(title,product)}</span>
    )
}

export const ProducButtons = () =>
{
    const {AddBy, counter} = useContext(ProductContext)

    return(
        <div className={styles.buttonsContainer}>
            <button 
                className={styles.buttonMinus}
                onClick={() => AddBy(-1)}>
                    -
                </button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                className={styles.buttonAdd}
                onClick={() => AddBy(1)}>
                    +
                </button>
        </div>
    )
}


// ==> yo le daria la responsabilidad de obtener los datos al componente de los botones. 
// ==/==> Creo que se hace asi para facilitar la comunicacion entre hijos y padres. pero Para eso esta es useContext

export const ProductCard = ({product, children} : productCardProps)=> 
{
    
    const {counter, AddBy} = useProduc()
    const {img, title } = product

    return (
        <Provider 
            value={{counter, AddBy, product}}>
            <div className={ styles.productCard }>
                {children}
            </div>
        </Provider>
    )
}

interface productCardProps{
    product: product
    children?:  ReactElement | ReactElement[]
} 

export interface product{
    id: string
    title: string
    img?: string
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProducButtons
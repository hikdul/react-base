
import { ProductContext } from '../context/ProductContext'
import { useProduc } from '../hooks/useProduct'
import { productCardProps } from '../intenfaces/Interfaces'
import styles from '../styles/styles.module.css'


// el proveedor de informacion
export const { Provider } = ProductContext


// ==/==&==> 
// ==/==&==> fin del Use Context

export const ProductCard = ({product, children} : productCardProps)=> 
{
    const {counter, AddBy} = useProduc()

    return (
        <Provider
            value={{counter, AddBy, product}}>
            <div className={ styles.productCard }>
                {children}
            </div>
        </Provider>
    )
}


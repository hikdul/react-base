import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import styles from '../styles/styles.module.css'

export const ProducButtons = ({className, style, buttonStyle, counterStyle}: Props) =>
{
    // TODO: {... moxCount?}
    const {AddBy, counter, maxCount} = useContext(ProductContext)

    // !! se usa useCallBack, para evitar refrescos inecesarios... en otras palabras react tiene memoria en este punto
    const isMarReacthed = useCallback(
        () => !!maxCount && counter == maxCount, [ counter, maxCount ]
    )
    const isMinReacthed = useCallback(
        () =>  counter == 0, [ counter ]
    )
    // TODO: isMarReacthed useCallback, [counter, maxcount] => true if couter === maxCount, else ... 

    return(
        <div className={`${styles.buttonsContainer} ${className}`}
         style={style}>
            <button 
                disabled={counter===0}
                style={buttonStyle}
                className={`${styles.buttonMinus} ${isMinReacthed() && styles.disabledI} `}
                onClick={() => AddBy(-1)}>
                    -
                </button>
            <div style={counterStyle} className={styles.countLabel}>{counter}</div>
            <button 
                style={buttonStyle}
                className={`${styles.buttonAdd} ${isMarReacthed() && styles.disabledD }`}
                onClick={() => AddBy(1)}>
                    +
                </button>
        </div>
    )
}

export interface Props
{
    className?: string
    style?: CSSProperties
    buttonStyle?: CSSProperties
    counterStyle?: CSSProperties
}
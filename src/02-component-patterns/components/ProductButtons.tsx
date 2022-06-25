import { CSSProperties, useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import styles from '../styles/styles.module.css'

export const ProducButtons = ({className, style, buttonStyle, counterStyle}: Props) =>
{
    const {AddBy, counter} = useContext(ProductContext)

    return(
        <div className={`${styles.buttonsContainer} ${className}`}
         style={style}>
            <button 
                style={buttonStyle}
                className={styles.buttonMinus}
                onClick={() => AddBy(-1)}>
                    -
                </button>
            <div style={counterStyle} className={styles.countLabel}>{counter}</div>
            <button 
                style={buttonStyle}
                className={styles.buttonAdd}
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
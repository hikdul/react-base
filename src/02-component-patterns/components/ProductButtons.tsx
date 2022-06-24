import { useContext } from "react"
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard"

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
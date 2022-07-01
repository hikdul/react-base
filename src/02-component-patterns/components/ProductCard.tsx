
import { CSSProperties, ReactElement } from "react";
import { ProductContext } from "../context/ProductContext";
import { useProduc } from "../hooks/useProduct";
import { initialValuesProductCarArgs, onChangeArgs, product } from "../intenfaces/Interfaces";
import styles from "../styles/styles.module.css";

// el proveedor de informacion
export const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: productCardProps) => {

  const { counter, AddBy, maxCount } = useProduc( { onChange, product, value, initialValues } )

  return (
    <Provider value={{ counter, AddBy, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {  children && children() }
      </div>
    </Provider>
  );
};

// ==/==&==>
export interface productCardProps
{
  product: product
  //children?: ReactElement | ReactElement[]
  children?: () =>  JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (Args: onChangeArgs) => void
  value?: number
  initialValues?: initialValuesProductCarArgs 
}

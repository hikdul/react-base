
import { CSSProperties, ReactElement } from "react";
import { ProductContext } from "../context/ProductContext";
import { useProduc } from "../hooks/useProduct";
import { initialValuesProductCarArgs, onChangeArgs, product, ProductCardHandlers } from "../intenfaces/Interfaces";
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

  const { counter, AddBy, maxCount, isMaxCountReached, reset } = useProduc( { onChange, product, value, initialValues } )

  return (
    <Provider value={{ counter, AddBy, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {  children && children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product: product,
          increaseBy: AddBy,
          reset
        }) }
      </div>
    </Provider>
  );
};

// ==/==&==>
export interface productCardProps
{
  product: product
  //children?: ReactElement | ReactElement[]
  children?: ( Args: ProductCardHandlers) =>  JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (Args: onChangeArgs) => void
  value?: number
  initialValues?: initialValuesProductCarArgs 
}

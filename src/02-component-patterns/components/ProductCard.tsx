import { CSSProperties, ReactElement } from "react";
import { ProductContext } from "../context/ProductContext";
import { useProduc } from "../hooks/useProduct";
import { product } from "../intenfaces/Interfaces";
import styles from "../styles/styles.module.css";

// el proveedor de informacion
export const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
}: productCardProps) => {
  const { counter, AddBy } = useProduc();

  return (
    <Provider value={{ counter, AddBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

// ==/==&==>
export interface productCardProps {
  product: product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

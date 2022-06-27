import { onChangeEventArgs, product } from "../intenfaces/Interfaces"
import { ProducButtons } from "./ProductButtons"
import { ProductCard } from "./ProductCard"
import { ProductImage } from "./ProductImage"
import { ProductTitle } from "./ProductTitle"
import '../styles/custom-styles.css'
import { CSSProperties } from "react"

export const RenderProducts = ({product, className, style, styleCard, value, onChange}: RenderProductsProps) => {
    return (
          <ProductCard
             product={product}
           className="bg-dark text-white"
            value={value || 0}
            onChange={onChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="negrita center-text" />
            <ProducButtons
              style={{ display: "flex", justifyContent: "center" }}
              className="custom-buttons"
            />
          </ProductCard>
    )
}

interface RenderProductsProps 
{
    product:product
    className?: string
    style?: CSSProperties
    styleCard?: CSSProperties
    value?: number
    onChange?: (props : onChangeEventArgs) => void 
}



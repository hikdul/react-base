import { product } from "../intenfaces/Interfaces"
import { ProducButtons } from "./ProductButtons"
import { ProductCard } from "./ProductCard"
import { ProductImage } from "./ProductImage"
import { ProductTitle } from "./ProductTitle"
import '../styles/custom-styles.css'
import { CSSProperties } from "react"

export const RenderProducts = ({product, className, style, styleCard}: RenderProductsProps) => {
    return (
        <div 
            className={className}
            style={style}>
            <ProductCard 
                style={styleCard}
                product={product}
                className="bg-dark text-white">
                <ProductImage  className="custom-image"/>
                <ProductTitle  className="negrita center-text"/>
                <ProducButtons className="custom-buttons"  />
            </ProductCard>
        </div>
    )
}

interface RenderProductsProps 
{
    product:product
    className?: string
    style?: CSSProperties
    styleCard?: CSSProperties
}



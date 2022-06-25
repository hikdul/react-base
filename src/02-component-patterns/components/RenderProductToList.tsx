import { product } from "../intenfaces/Interfaces"
import { ProducButtons } from "./ProductButtons"
import { ProductCard } from "./ProductCard"
import { ProductImage } from "./ProductImage"
import { ProductTitle } from "./ProductTitle"
import '../styles/custom-styles.css'

export const RenderProducts = ({product}:{product:product}) => {
    return (
        <ProductCard product={product} >
            <ProductImage  />
            <ProductTitle  />
            <ProducButtons  />
        </ProductCard>
    )
}
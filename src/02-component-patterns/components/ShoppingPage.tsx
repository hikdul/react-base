import { isPropertyDeclaration } from "typescript"
import { ProducButtons, product, ProductCard, ProductImage, ProductTitle } from "./ProductCard"
 
const PRODUCTOS = [
    {
        id: '1',
        title: 'Cards'
    },
    {
        id: '2',
        title: 'Glove',
        img: 'https://m.media-amazon.com/images/I/81zntf8vBtL._SL1500_.jpg'
    },
    {
        id: '3',
        title: 'Coffee cup',
        img: 'https://m.media-amazon.com/images/I/71v4tmf5dSS._AC_SX466_.jpg'
    },
    {
        id: '4',
        title: 'Coffee Mug',
        img: '/coffee-mug.png'
    },
]

const RenderProducts = ({product}:{product:product}) => {
    return (
        <ProductCard product={product}>
            <ProductCard.Title />
            <ProductCard.Image />
            <ProductCard.Buttons />
        </ProductCard>
    )
}

export const ShoppingPage = () => 
{
    return(
        <div>
            <h1>Shoppin store</h1>
            <hr/>
            <div 
                style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {PRODUCTOS.map( prod => <RenderProducts key={prod.id} product={prod} />)}
            </div>
        </div>
    )
}

import { ProducButtons, ProductImage, ProductTitle, RenderProducts } from '../components'
import { ProductCard } from '../components/ProductCard'
import '../styles/custom-styles.css'

const PRODUCTOS = [
    {
        id: '1',
        title: 'Cards'
    },
    {
        id: '4',
        title: 'Coffee Mug',
        img: '/coffee-mug.png'
    },
    {
        id: '5',
        title: 'Coffee Mug - Meme',
        img: '/coffee-mug2.png'
    },
]

export const ShoppingPage = () => 
{
    return(
        <div>
            <h1>Shoppin store</h1>
            <hr/>
            {/* para ver los productos grandes */}
            <div 
                style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {PRODUCTOS.map( prod  => <ProductCard 
                                    product={prod}
                                    className="bg-dark text-white">
                                    <ProductImage  className="custom-image"/>
                                    <ProductTitle  className="negrita center-text"/>
                                    <ProducButtons className="custom-buttons"  />
                                </ProductCard>
                    )}
            </div>
            {/* para ver el corritos de compras */}
            <div className='shoppning-car'>
                    {PRODUCTOS.map( prod  =><ProductCard
                                           style={{
                                                width: '100px'
                                           }} 
                                           product={prod}
                                           className="bg-dark text-white">
                                           <ProductImage  className="custom-image"/>
                                           <ProducButtons className="custom-buttons"  />
                                       </ProductCard>)
                    }
            </div>
        </div>
    )
}

import { ProducButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";
import { PRODUCTOS } from "../const/Productos";

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shoppin store</h1>
      <hr />
      <div style={{display: "flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "space-between"}}
      >
        {PRODUCTOS.map( prod =>(
          <ProductCard 
           key={prod.id}  
           product={prod} 
           initialValues={{count:0, maxCount: prod.cant}}>
             {
              ({reset, count, increaseBy, isMaxCountReached})=>(
                <>
                  <ProductImage />
                  <ProductTitle />
                  <ProducButtons />
                </>
              
              )
             }
          </ProductCard>))}       

      </div>
    </div>
  )
}

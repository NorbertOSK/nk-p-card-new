# NK-Product-Card

Este es un paquete de prueba de despliegue en NPM

### NorbertoK.com

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductBottons} from 'nk-p-card-new'

```

```
 <ProductCard

                initialValues={{
                    count: 4,
                    // maxCount: 10,
                }}
                product={product}

            >
                {
                    ({reset, isMaxCountReached, maxCount, count, increaseBy}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductBottons />

                        </>
                    )
                }


            </ProductCard>
```

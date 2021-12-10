import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductBottons } from '../.';

const product = {
  id: "1",
  title: "Coffee Mug - Card!",
  // img: './coffee-mug.png'
}


const App = () => {
  return (
    <>
      <ProductCard

        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
        product={product}

      >
        {
          ({ reset, isMaxCountReached, maxCount, count, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductBottons />

            </>
          )
        }


      </ProductCard>

    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ProductItem from './ProductItem';

const productList = [
  {
    id: '1',
    image: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '$16.00',
  },
  {
    id: '2',
    image: 'https://dummyimage.com/421x261',
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  // Add more products here
];

const Products: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productList.map((product, index) => (
            <ProductItem
              key={index}
              id={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

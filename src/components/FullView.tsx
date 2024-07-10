import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: '1',
    image: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '$16.00',
    description: 'A detailed description of The Catalyzer.'
  },
  {
    id: '2',
    image: 'https://dummyimage.com/421x261',
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
    description: 'A detailed description of Shooting Stars.'
  },
  // Add more products here
];

const FullView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-24 px-5">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
          <p className="leading-relaxed">{product.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullView;
